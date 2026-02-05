import type { Notification } from "../../../pages/time";
import { PageHeader } from "../../../components/fragments/Header/PageHeader";
import { CardPlayground } from "./Card/CardPlayground";
import { CardNotification } from "./Card/CardNotification";

export interface NotificationProcessed extends Notification {
  displayTime: string;
}

interface TimeProps {
  dateValue: string;
  onDateChange: (val: string) => void;
  converstionDate: string;
  notifications: NotificationProcessed[];
}

export const TimeView = (props: TimeProps) => {
  const { dateValue, onDateChange, converstionDate, notifications } = props;

  return (
    <div className="grow grid place-items-center">
      <div className="w-full max-w-2xl p-6 space-y-8 bg-indigo-300/5 rounded-lg">
        {/* Header */}
        <PageHeader title="⏳ Relative Time" />
        <div className="grid grid-cols-2 gap-4">
          {/* --- SECTION 1: LIVE PLAYGROUND --- */}
          <CardPlayground
            value={dateValue}
            onChange={onDateChange}
            time={converstionDate}
          />

          {/* --- SECTION 2: REAL IMPLEMENTATION --- */}
          <CardNotification data={notifications} />
        </div>
      </div>
    </div>
  );
};
