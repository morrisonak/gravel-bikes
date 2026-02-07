import { createFileRoute } from '@tanstack/react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();

  const { data: status, isLoading } = useQuery({
    queryKey: ['metrics', 'status'],
    queryFn: async () => {
      const res = await fetch('/api/metrics/status');
      return res.json();
    },
    refetchInterval: 30000,
  });

  const { data: cost } = useQuery({
    queryKey: ['metrics', 'cost'],
    queryFn: async () => {
      const res = await fetch('/api/metrics/cost');
      return res.json();
    },
    refetchInterval: 60000,
  });

  const { data: tasksData } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch('/api/tasks');
      return res.json() as Promise<{ tasks: any[] }>;
    },
    refetchInterval: 5000,
  });
  const tasks = tasksData as any;

  const createTaskMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, prompt }),
      });
      if (!res.ok) throw new Error('Failed to create task');
      return res.json();
    },
    onSuccess: () => {
      setPrompt('');
      setTitle('');
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">🌊 OpenClaw Control Panel</h1>
        <p className="text-gray-600">Real-time monitoring and management</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-600 mb-2">Gateway Status</div>
          <div className="text-2xl font-bold">{(status as any)?.gateway?.ok ? '✓ Online' : '✗ Offline'}</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-600 mb-2">Active Sessions</div>
          <div className="text-2xl font-bold">{(status as any)?.sessions?.activeSessions || 0}</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-600 mb-2">Daily Spend</div>
          <div className="text-2xl font-bold">${(cost as any)?.dailySpend?.toFixed(2) || '0.00'}</div>
          <div className="text-xs text-gray-500">{(cost as any)?.usagePercent || 0}% of budget</div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm text-gray-600 mb-2">Monthly Projection</div>
          <div className="text-2xl font-bold">${(cost as any)?.estimatedMonthly?.toFixed(0) || '0'}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">📊 Monitoring</h2>
          <p className="text-gray-600">Model usage, agent health, and cron jobs coming soon...</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">⚙️ Control</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Trigger Heartbeat
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Restart Gateway
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">✅ Tasks</h2>
          
          {/* Task Input Form */}
          <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Analyze logs"
                className="w-full px-3 py-2 border border-gray-300 rounded hover:border-blue-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Give OpenClaw instructions..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded hover:border-blue-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => createTaskMutation.mutate()}
              disabled={!title || !prompt || createTaskMutation.isPending}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              {createTaskMutation.isPending ? 'Creating...' : 'Create Task'}
            </button>
          </div>

          {/* Task List */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">ID</th>
                  <th className="px-4 py-2 text-left font-semibold">Title</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Created</th>
                </tr>
              </thead>
              <tbody>
                {(tasks?.tasks || []).map((task: any) => (
                  <tr key={task.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-gray-600">#{task.id}</td>
                    <td className="px-4 py-2">{task.title}</td>
                    <td className="px-4 py-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        task.status === 'completed' ? 'bg-green-100 text-green-800' :
                        task.status === 'running' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-gray-600">
                      {new Date(task.created_at * 1000).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {(!tasks?.tasks || tasks.tasks.length === 0) && (
              <p className="text-center text-gray-500 py-4">No tasks yet</p>
            )}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">📝 Logs</h2>
          <p className="text-gray-600">Real-time log streaming coming soon...</p>
        </div>
      </div>
    </div>
  );
}
