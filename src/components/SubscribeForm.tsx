import { useState } from 'react'
import { subscribe } from '~/server/subscribe'

export function SubscribeForm({ compact }: { compact?: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const result = await subscribe({ data: { email } })
      setStatus('success')
      setMessage(result.message)
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={compact ? 'text-sm text-green-400' : 'text-center'}>
        <p className={compact ? '' : 'text-green-400 font-medium'}>{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={compact ? 'flex gap-2' : 'flex flex-col sm:flex-row gap-3 max-w-md mx-auto'}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        disabled={status === 'loading'}
        className={
          compact
            ? 'flex-1 min-w-0 px-3 py-2 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50'
            : 'flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50'
        }
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={
          compact
            ? 'bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50'
            : 'bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50'
        }
      >
        {status === 'loading' ? 'Subscribing...' : compact ? 'Join' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className={compact ? 'text-xs text-red-400 col-span-full' : 'text-sm text-red-400 text-center sm:text-left basis-full'}>{message}</p>
      )}
    </form>
  )
}
