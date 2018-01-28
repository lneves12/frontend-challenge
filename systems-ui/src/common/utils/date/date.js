export function formatDateByTimestamp(timestamp) {
  const date = new Date(timestamp);

  return date && date.toLocaleString();
}
