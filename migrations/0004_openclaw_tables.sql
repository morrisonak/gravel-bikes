-- OpenClaw integration tables
-- Migration number: 0004

-- Tasks table
CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending', -- pending, in-progress, completed
  priority TEXT DEFAULT 'medium', -- low, medium, high
  created_at INTEGER DEFAULT (unixepoch()),
  updated_at INTEGER DEFAULT (unixepoch()),
  completed_at INTEGER
);

-- Cost metrics (snapshots)
CREATE TABLE IF NOT EXISTS metrics (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  timestamp INTEGER DEFAULT (unixepoch()),
  daily_cost REAL DEFAULT 0,
  monthly_cost REAL DEFAULT 0,
  daily_tokens_in INTEGER DEFAULT 0,
  daily_tokens_out INTEGER DEFAULT 0,
  total_sessions INTEGER DEFAULT 0,
  active_sessions INTEGER DEFAULT 0
);

-- Agent health logs
CREATE TABLE IF NOT EXISTS agent_logs (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  agent_id TEXT NOT NULL,
  status TEXT NOT NULL, -- running, idle, error, offline
  timestamp INTEGER DEFAULT (unixepoch()),
  heartbeat_at INTEGER,
  error_message TEXT
);

-- Cron job tracking
CREATE TABLE IF NOT EXISTS cron_jobs (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  schedule TEXT,
  next_run INTEGER,
  last_run INTEGER,
  status TEXT DEFAULT 'active',
  payload TEXT
);

CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_created_at ON tasks(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_metrics_timestamp ON metrics(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_agent_logs_timestamp ON agent_logs(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_cron_next_run ON cron_jobs(next_run);
