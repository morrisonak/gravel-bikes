import { env } from 'cloudflare:workers'

/**
 * Get the Cloudflare environment bindings
 */
export function getEnv(): Env {
  return env as Env
}

/**
 * Get the SUBSCRIBERS KV namespace instance
 */
export function getSubscribersKV(): KVNamespace {
  return getEnv().SUBSCRIBERS
}
