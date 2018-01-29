export function formatDateByTimestamp(timestamp) {
  const date = new Date(timestamp);

  return date && date.toLocaleString();
}

export function getFormattedNow() {
  const date = new Date();

  return date && date.toLocaleString();
}

export function compareDateByTimestamp(t1, t2) {
  const d1 = new Date(t1);
  const d2 = new Date(t2);

  return d1.getTime() - d2.getTime();
}
