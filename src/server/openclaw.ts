// OpenClaw API integration

interface GatewayStatus {
  ok: boolean;
  uptime?: number;
  sessions?: number;
  agents?: any[];
  lastCheck?: number;
}

interface SessionMetrics {
  activeSessions: number;
  totalSessions: number;
  avgTokensPerSession: number;
  totalTokens: number;
}

interface CostData {
  dailySpend: number;
  monthlySpend: number;
  dailyTokens: number;
  estimatedDaily: number;
  estimatedMonthly: number;
}

interface ModelUsage {
  model: string;
  tokensIn: number;
  tokensOut: number;
  callCount: number;
  costEstimate: number;
}

const OPENCLAW_URL = process.env.OPENCLAW_URL || 'http://localhost:18789';
const OPENCLAW_TOKEN = process.env.OPENCLAW_TOKEN || '';

// Get gateway status
export async function getGatewayStatus(): Promise<GatewayStatus> {
  try {
    const res = await fetch(`${OPENCLAW_URL}/status`, {
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as any;
    return {
      ok: true,
      uptime: data.uptime,
      sessions: data.sessions?.length || 0,
      agents: data.agents || [],
      lastCheck: Date.now(),
    };
  } catch (e) {
    return { ok: false };
  }
}

// List active sessions
export async function listSessions(): Promise<SessionMetrics> {
  try {
    const res = await fetch(`${OPENCLAW_URL}/sessions`, {
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) return { activeSessions: 0, totalSessions: 0, avgTokensPerSession: 0, totalTokens: 0 };
    const data = (await res.json()) as any;
    const sessions = data.result || [];
    const totalTokens = sessions.reduce((sum: number, s: any) => sum + (s.tokenCount || 0), 0);
    return {
      activeSessions: sessions.filter((s: any) => s.active).length,
      totalSessions: sessions.length,
      avgTokensPerSession: sessions.length > 0 ? totalTokens / sessions.length : 0,
      totalTokens,
    };
  } catch (e) {
    return { activeSessions: 0, totalSessions: 0, avgTokensPerSession: 0, totalTokens: 0 };
  }
}

// List cron jobs
export async function listCronJobs() {
  try {
    const res = await fetch(`${OPENCLAW_URL}/cron/list`, {
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as any;
    return data.result || [];
  } catch (e) {
    return [];
  }
}

// Add cron job
export async function addCronJob(job: any) {
  try {
    const res = await fetch(`${OPENCLAW_URL}/cron/add`, {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${OPENCLAW_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    throw new Error(`Failed to add cron job: ${e}`);
  }
}

// Delete cron job
export async function deleteCronJob(jobId: string) {
  try {
    const res = await fetch(`${OPENCLAW_URL}/cron/${jobId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { ok: true };
  } catch (e) {
    throw new Error(`Failed to delete cron job: ${e}`);
  }
}

// Trigger heartbeat
export async function triggerHeartbeat(target?: string) {
  try {
    const res = await fetch(`${OPENCLAW_URL}/cron/wake`, {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${OPENCLAW_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode: 'now', ...(target && { target }) }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    throw new Error(`Failed to trigger heartbeat: ${e}`);
  }
}

// Get session status
export async function getSessionStatus(sessionKey?: string) {
  try {
    const url = sessionKey 
      ? `${OPENCLAW_URL}/session/${sessionKey}/status` 
      : `${OPENCLAW_URL}/status`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

// Restart gateway
export async function restartGateway() {
  try {
    const res = await fetch(`${OPENCLAW_URL}/gateway/restart`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${OPENCLAW_TOKEN}` },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { ok: true };
  } catch (e) {
    throw new Error(`Failed to restart gateway: ${e}`);
  }
}

// Execute a task via the chat completions endpoint
export async function executeTask(prompt: string): Promise<{ response: string }> {
  try {
    const res = await fetch(`${OPENCLAW_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: { 
        Authorization: `Bearer ${OPENCLAW_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: prompt }],
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      throw new Error(`HTTP ${res.status}: ${err}`);
    }
    const data = await res.json() as any;
    const response = data.choices?.[0]?.message?.content || '';
    return { response };
  } catch (e) {
    throw new Error(`Failed to execute task: ${e}`);
  }
}
