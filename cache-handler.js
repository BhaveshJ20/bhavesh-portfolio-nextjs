const path = require('path');
const fs = require('fs');

// Use local temp directory for cache
const CACHE_DIR = path.join(process.env.LOCALAPPDATA || process.env.TEMP || 'C:\\temp', 'nextjs-cache');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

class LocalCacheHandler {
  constructor(options = {}) {
    this.cacheDir = options.cacheDir || CACHE_DIR;
  }

  async get(key) {
    try {
      const filePath = path.join(this.cacheDir, key);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  async set(key, value, ttl) {
    try {
      const filePath = path.join(this.cacheDir, key);
      fs.writeFileSync(filePath, JSON.stringify(value), 'utf-8');
    } catch (error) {
      // Silently fail on cache write errors
    }
  }

  async revalidateTag(tag) {
    // Clear all cache entries with this tag
    try {
      const files = fs.readdirSync(this.cacheDir);
      for (const file of files) {
        const filePath = path.join(this.cacheDir, file);
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      // Silently fail
    }
  }
}

module.exports = LocalCacheHandler;
