import crypto from 'crypto';
import NodeCache from 'node-cache';

let redisClient: any = null;
let useRedis = true;
const memoryCache = new NodeCache({ stdTTL: 3600, maxKeys: 500 });

async function getRedis() {
  if (!useRedis) return null;
  if (!redisClient) {
    try {
      const Redis = (await import('ioredis')).default;
      const url = process.env.REDIS_URL || 'redis://localhost:6379';
      redisClient = new Redis(url);
      await redisClient.ping();
    } catch {
      useRedis = false;
      redisClient = null;
    }
  }
  return redisClient;
}

export function generateCacheKey(...args: any[]): string {
  const raw = JSON.stringify(args);
  return crypto.createHash('sha256').update(raw).digest('hex');
}

export async function cacheGet(key: string): Promise<any | null> {
  const redis = await getRedis();
  if (redis) {
    try {
      const val = await redis.get(`ai:${key}`);
      if (val) return JSON.parse(val);
    } catch {}
  }
  return memoryCache.get(key) || null;
}

export async function cacheSet(key: string, value: any, ttl: number = 7200): Promise<void> {
  const redis = await getRedis();
  if (redis) {
    try {
      await redis.setex(`ai:${key}`, ttl, JSON.stringify(value));
      return;
    } catch {}
  }
  memoryCache.set(key, value, ttl);
}
