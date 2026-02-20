export const toRelativeTime = (timestamp: number) => {
  const now = Date.now();
  const diffInMs = now - timestamp;

  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) return "Recently";

  if (diffInMinutes < 60) return `${diffInMinutes} Minutes Ago`;

  if (diffInHours < 24) return `${diffInHours} Hours Ago`;

  return `${diffInDays} Days Ago`;
};
