import { PageHeader } from "../../../components/fragments/Header/PageHeader";

interface SlugProps {
  titleValue: string;
  onTitleChange: (val: string) => void;
  slugResult: string;
  handleCopy: () => void;
  copied: boolean;
}

export const SlugView = (props: SlugProps) => {
  const { titleValue, onTitleChange, slugResult, handleCopy, copied } = props;

  return (
    <div className="grow grid place-items-center">
      <div className="w-full max-w-xl p-6 bg-indigo-300/5 rounded-lg">
        {/* Header */}
        <PageHeader title="🔗 Slug Generator" />

        <div className="px-4  space-y-6">
          {/* Input Judul */}
          <div>
            <label className="block text-sm font-bold text-slate-200 mb-2">
              Type Article Title:
            </label>
            <textarea
              value={titleValue}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Example: Learn React & Vite 100% Fast!!!"
              className="w-full p-4 border bg-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none resize-none h-24"
            />
          </div>

          {/* Output Slug */}
          <div className="bg-slate-200 p-6 rounded-xl ">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              URL Slug Preview:
            </label>

            <div className="flex items-center bg-gray-300 rounded-lg overflow-hidden">
              <span className="px-3 py-3 text-gray-500 text-sm font-mono border-r border-gray-400">
                xyz-blog.com/post/
              </span>
              <span className="px-3 py-3 text-indigo-600 font-mono font-bold flex-1 truncate">
                {slugResult || "..."}
              </span>
            </div>

            <button
              onClick={handleCopy}
              disabled={!slugResult}
              className={`mt-4 w-full py-3 rounded-lg font-bold flex justify-center items-center gap-2 transition-all ${
                !slugResult
                  ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                  : copied
                    ? "bg-green-500 text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
              }`}
            >
              {copied ? "✅ Berhasil Dicopy!" : "📋 Copy URL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
