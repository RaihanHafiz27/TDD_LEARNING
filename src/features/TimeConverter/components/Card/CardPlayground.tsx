interface PlaygroundProps {
  value: string;
  onChange: (val: string) => void;
  time: string;
}

export const CardPlayground = (props: PlaygroundProps) => {
  const { value, onChange, time } = props;
  return (
    <div className="bg-indigo-700  p-6 rounded-xl space-y-6">
      <h3 className="font-bold text-slate-200 text-center">
        🕹️ Try It Yourself
      </h3>

      <div className="space-y-6">
        <div className="">
          <label className="block text-sm font-medium text-slate-300 mb-4">
            Select Past Time:
          </label>
          <input
            type="datetime-local"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-slate-200"
          />
        </div>

        <div className="bg-slate-200 p-4 rounded-lg border border-blue-100 text-center grow flex flex-col justify-center items-center">
          {value ? (
            <>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">
                Logic Conversion Results
              </span>
              <p className="text-2xl font-bold text-blue-600">{time}</p>
            </>
          ) : (
            <p className="text-gray-400 italic">
              Please select a date and time above...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
