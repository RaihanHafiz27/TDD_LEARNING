import { useMemo, useState } from "react";
import { toRelativeTime } from "../features/TimeConverter/timeUtils";
import { TimeView } from "../features/TimeConverter/components/TimeView";

export interface Notification {
  id: number;
  text: string;
  time: number;
}

// Helper: Static Dummy Data as a real world example
const generateNotifications = () => {
  const now = Date.now();
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  return [
    { id: 1, text: "Ada komentar baru", time: now - 10 * 1000 }, // 10 sec ago
    { id: 2, text: "Server restart", time: now - 8 * minute }, // 5 minutes ago
    { id: 3, text: "Pesanan dikirim", time: now - 4 * hour }, // 4 hours ago
    { id: 4, text: "Welcome user!", time: now - 3 * day }, // 3 days ago
  ];
};

export const TimePage = () => {
  const notificationsData: Notification[] = generateNotifications();

  // State For Live Tester
  const [customDate, setCustomDate] = useState<string>("");

  const relativeTime = useMemo(() => {
    return toRelativeTime(new Date(customDate).getTime());
  }, [customDate]);

  const processedNotifications = useMemo(() => {
    return notificationsData.map((notif) => ({
      ...notif,
      displayTime: toRelativeTime(new Date(notif.time).getTime()),
    }));
  }, [notificationsData]);

  return (
    <TimeView
      dateValue={customDate}
      onDateChange={setCustomDate}
      converstionDate={relativeTime}
      notifications={processedNotifications}
    />
  );
};
