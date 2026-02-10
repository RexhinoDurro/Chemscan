import json
import hashlib
import os
from functools import lru_cache
from typing import Any

_redis_client = None
_use_redis = True


def _get_redis():
    global _redis_client, _use_redis
    if not _use_redis:
        return None
    if _redis_client is None:
        try:
            import redis
            url = os.environ.get("REDIS_URL", "redis://localhost:6379/0")
            _redis_client = redis.from_url(url)
            _redis_client.ping()
        except Exception:
            _use_redis = False
            _redis_client = None
    return _redis_client


# In-memory fallback
_memory_cache: dict[str, Any] = {}
_CACHE_MAX = 1000


def cache_key(*args) -> str:
    raw = json.dumps(args, sort_keys=True, default=str)
    return hashlib.sha256(raw.encode()).hexdigest()


def cache_get(key: str) -> Any | None:
    r = _get_redis()
    if r:
        try:
            val = r.get(f"chem:{key}")
            if val:
                return json.loads(val)
        except Exception:
            pass
    return _memory_cache.get(key)


def cache_set(key: str, value: Any, ttl: int = 3600) -> None:
    r = _get_redis()
    if r:
        try:
            r.setex(f"chem:{key}", ttl, json.dumps(value, default=str))
            return
        except Exception:
            pass
    if len(_memory_cache) >= _CACHE_MAX:
        oldest = next(iter(_memory_cache))
        del _memory_cache[oldest]
    _memory_cache[key] = value
