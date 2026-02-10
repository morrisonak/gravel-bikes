import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'

export const subscribe = createServerFn({ method: 'POST' })
  .inputValidator((data: { email: string }) => {
    const email = data.email?.trim().toLowerCase()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Please enter a valid email address.')
    }
    return { email }
  })
  .handler(async ({ data }) => {
    const kv = (env as Env).SUBSCRIBERS

    const existing = await kv.get(`email:${data.email}`)
    if (existing) {
      return { success: true as const, message: "You're already subscribed!" }
    }

    await kv.put(
      `email:${data.email}`,
      JSON.stringify({ email: data.email, subscribedAt: new Date().toISOString() }),
    )

    return { success: true as const, message: "You're in! Watch your inbox for weekly gravel gear deals." }
  })
