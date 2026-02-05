import type { NotificationProcessed } from "../TimeView";

export const CardNotification = ({
  data,
}: {
  data: NotificationProcessed[];
}) => {
  return (
    <div className="bg-indigo-700 rounded-xl shadow-sm overflow-hidden px-4 py-2">
      <h3 className="font-bold  text-center text-slate-200 py-4">
        Notification Implementation
      </h3>
      <ul className="">
        {data.map((item) => (
          <li
            key={item.id}
            className="py-3 hover:bg-blue-500/10 transition-all duration-300 flex gap-4 items-center"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
              🔔
            </div>
            <div>
              <p className="text-slate-200 text-sm font-medium">{item.text}</p>
              <p className="text-xs text-gray-300 mt-1 font-mono">
                {item.displayTime}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
