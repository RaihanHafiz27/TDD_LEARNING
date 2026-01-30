import { useState } from "react";
import { Link } from "react-router";
import { toRelativeTime } from "../features/TimeConverter/timeUtils";

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

export const TimeView = () => {
  const notifications = generateNotifications();

  // State For Live Tester
  const [customDate, setCustomDate] = useState<string>("");

  console.log(notifications);

  return (
    <div className="grow grid place-items-center">
      <div className="max-w-2xl  rounded-md p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-200">
            ⏳ Relative Time
          </h2>
          <Link to="/" className="text-blue-600 hover:underline text-sm">
            ← Menu
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* --- SECTION 1: LIVE PLAYGROUND --- */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl space-y-4">
            <h3 className="font-bold text-blue-600 text-center">
              🕹️ Try It Yourself
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Select Past Time:
                </label>
                <input
                  type="datetime-local"
                  value={customDate}
                  onChange={(e) => setCustomDate(e.target.value)}
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                />
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-100 text-center min-h-20 flex flex-col justify-center items-center">
                {customDate ? (
                  <>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                      Logic Conversion Results
                    </span>
                    <p className="text-2xl font-bold text-blue-600">
                      {toRelativeTime(new Date(customDate).getTime())}
                    </p>
                  </>
                ) : (
                  <p className="text-gray-400 italic">
                    Please select a date and time above...
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* --- SECTION 2: REAL IMPLEMENTATION --- */}
          <div className="bg-blue-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <h3 className="font-bold  text-center text-blue-600 pt-4">
              Notification Implementation
            </h3>
            <ul className="">
              {notifications.map((notif) => (
                <li
                  key={notif.id}
                  className="p-4 hover:bg-blue-700/10 transition-all duration-300 flex gap-4 items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                    🔔
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      {notif.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                      {toRelativeTime(notif.time)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
