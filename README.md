# Claw Panel

OpenClaw control and monitoring dashboard. Full-suite monitoring, task management, and gateway control.

## Stack

- **Frontend:** TanStack Start + React + Shadcn UI + Tailwind CSS
- **Backend:** Cloudflare Workers + TanStack Server Functions
- **Database:** D1 (Cloudflare SQLite)
- **Storage:** R2 (optional, for logs/exports)
- **Cache:** KV (optional, for performance)

## Features

### Monitoring
- ✅ Gateway status (online/offline, uptime)
- ✅ Active sessions & token usage
- ✅ Cost tracking (daily/monthly spend)
- ✅ Model usage breakdown (Haiku vs Sonnet)
- ✅ Agent health & heartbeat logs
- ✅ Cron job status & scheduling

### Control
- ✅ Trigger heartbeats manually
- ✅ Restart gateway
- ✅ Manage cron jobs (add/delete/update)
- ✅ View real-time logs
- ✅ Start/stop agents

### Task Management
- ✅ Create, edit, delete tasks
- ✅ Track task status (pending, in-progress, completed)
- ✅ Priority levels (low, medium, high)
- ✅ Task history & completion tracking

## Setup

### 1. Create Cloudflare Resources

```bash
cd ~/projects/claw-panel

# Create D1 database
wrangler d1 create claw-panel-db

# Copy the database_id into wrangler.jsonc
```

### 2. Set Environment Variables

```bash
# Set OpenClaw token (for API access)
wrangler secret put OPENCLAW_TOKEN

# Set OpenClaw URL (if not localhost)
# Update OPENCLAW_URL in wrangler.jsonc
```

### 3. Install & Run Locally

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy to Production

```bash
bun run db:migrate:prod  # Apply migrations
bun run deploy
```

## Database Schema

### tasks
- `id` (TEXT PRIMARY KEY)
- `title` (TEXT NOT NULL)
- `description` (TEXT)
- `status` (pending | in-progress | completed)
- `priority` (low | medium | high)
- `created_at`, `updated_at`, `completed_at` (INTEGER)

### metrics
- `id` (TEXT PRIMARY KEY)
- `timestamp` (INTEGER)
- `daily_cost`, `monthly_cost` (REAL)
- `daily_tokens_in`, `daily_tokens_out` (INTEGER)
- `total_sessions`, `active_sessions` (INTEGER)

### agent_logs
- `id` (TEXT PRIMARY KEY)
- `agent_id` (TEXT)
- `status` (running | idle | error | offline)
- `timestamp` (INTEGER)
- `heartbeat_at` (INTEGER)
- `error_message` (TEXT)

### cron_jobs
- `id` (TEXT PRIMARY KEY)
- `name` (TEXT)
- `schedule` (TEXT)
- `next_run`, `last_run` (INTEGER)
- `status` (TEXT)
- `payload` (TEXT)

## API Endpoints

### Tasks
- `GET /api/tasks` — List all tasks
- `POST /api/tasks` — Create task
- `PUT /api/tasks/:id` — Update task
- `DELETE /api/tasks/:id` — Delete task

### Metrics
- `GET /api/metrics/status` — Gateway & session status
- `GET /api/metrics/cost` — Cost data
- `GET /api/metrics/models` — Model usage
- `GET /api/metrics/agents` — Agent health
- `GET /api/metrics/cron` — Cron jobs
- `POST /api/metrics/cron` — Add cron job
- `DELETE /api/metrics/cron/:id` — Delete cron job
- `POST /api/metrics/heartbeat` — Trigger heartbeat
- `POST /api/metrics/gateway-restart` — Restart gateway

## Environment Variables

| Variable | Description |
|---|---|
| `OPENCLAW_URL` | OpenClaw gateway URL (default: http://localhost:18789) |
| `OPENCLAW_TOKEN` | OpenClaw gateway token (set via wrangler secret) |
| `ENVIRONMENT` | `development` or `production` |

## Next Steps

- [ ] Real-time WebSocket updates for metrics
- [ ] Task scheduling integration with cron
- [ ] Log streaming and filtering
- [ ] Cost predictions & alerts
- [ ] Agent resource monitoring (CPU, memory)
- [ ] Session transcript viewer
- [ ] Audit logs & access control
