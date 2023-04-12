export function isClientSide(): boolean {
  return typeof window !== "undefined";
}

export function getItem(key: string, defaultValue: string): string {
  if (!isClientSide()) {
    return defaultValue;
  }

  const storedValue = localStorage.getItem(key);
  return storedValue ? storedValue : defaultValue;
}

export function setItem(key: string, value: string): void {
  if (isClientSide()) {
    localStorage.setItem(key, value);
  }
}
