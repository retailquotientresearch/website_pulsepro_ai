export async function register() {
  // Node.js 22+ exposes a partial `localStorage` global that lacks proper methods.
  // next-themes checks `typeof window === 'undefined'` but Node 22+ also exposes
  // `window`, causing it to call `localStorage.getItem` on the server and crash.
  // Polyfill a no-op localStorage so next-themes falls back gracefully on the server.
  if (typeof globalThis.localStorage !== 'undefined') {
    const noop = () => null;
    try {
      // Only patch if getItem is not a proper function
      if (typeof (globalThis.localStorage as Storage).getItem !== 'function') {
        (globalThis as typeof globalThis & { localStorage: Storage }).localStorage = {
          getItem: noop,
          setItem: () => {},
          removeItem: () => {},
          clear: () => {},
          key: () => null,
          length: 0,
        } as unknown as Storage;
      }
    } catch {
      // ignore
    }
  }
}
