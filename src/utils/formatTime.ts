export function timeAgo(date: Date) {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const [interval, secondsInInterval] of Object.entries(intervals)) {
    const intervalInSeconds = secondsInInterval;
    const intervalCount = Math.floor(seconds / intervalInSeconds);

    if (intervalCount >= 1) {
      return `${intervalCount} ${interval}${intervalCount > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}
