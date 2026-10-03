/** Device-local JSON storage helpers. Values are namespaced to avoid collisions. */
const STORAGE_PREFIX = "chat:";

function deviceStorage(): Storage | null {
	try {
		return typeof window === "undefined" ? null : window.localStorage;
	} catch {
		return null;
	}
}

function keyFor(key: string): string {
	if (!key.trim()) throw new Error("Storage key cannot be empty.");
	return `${STORAGE_PREFIX}${key}`;
}

/** Store a JSON-serializable value. Returns false if device storage is unavailable. */
export function setItem<T>(key: string, value: T): boolean {
	const storage = deviceStorage();
	if (!storage) return false;
	try {
		const serialized = JSON.stringify(value);
		if (serialized === undefined) return false;
		storage.setItem(keyFor(key), serialized);
		return true;
	} catch {
		return false;
	}
}

/** Retrieve a stored value, returning fallback if missing or invalid. */
export function getItem<T>(key: string, fallback: T): T {
	const storage = deviceStorage();
	if (!storage) return fallback;
	try {
		const serialized = storage.getItem(keyFor(key));
		return serialized === null ? fallback : (JSON.parse(serialized) as T);
	} catch {
		return fallback;
	}
}

/** Delete a stored value. */
export function removeItem(key: string): boolean {
	const storage = deviceStorage();
	if (!storage) return false;
	try {
		storage.removeItem(keyFor(key));
		return true;
	} catch {
		return false;
	}
}

/** Delete all values managed by this API. */
export function clear(): boolean {
	const storage = deviceStorage();
	if (!storage) return false;
	try {
		const keys: string[] = [];
		for (let i = 0; i < storage.length; i += 1) {
			const key = storage.key(i);
			if (key?.startsWith(STORAGE_PREFIX)) keys.push(key);
		}
		keys.forEach((key) => storage.removeItem(key));
		return true;
	} catch {
		return false;
	}
}