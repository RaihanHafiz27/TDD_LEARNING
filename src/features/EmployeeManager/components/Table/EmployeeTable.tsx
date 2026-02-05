import type { Employee } from "../../utils/employee";

export const EmployeeTable = ({ data }: { data: Employee[] }) => {
  return (
    <div className="bg-transparent rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className=" text-gray-600 uppercase text-xs font-semibold">
          <tr className="text-slate-200">
            <th className="p-4 border-b">Name</th>
            <th className="p-4 border-b">Role</th>
            <th className="p-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-700/20 transition">
                <td className="p-4 border-b border-gray-500 font-medium text-gray-400">
                  {emp.name}
                </td>
                <td className="p-4 border-b border-gray-500 text-gray-400">
                  {emp.role}
                </td>
                <td className="p-4 border-b border-gray-500">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      emp.status === "Active"
                        ? "border border-green-100 text-green-500"
                        : "border border-red-100 text-red-500"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-8 text-center text-gray-500">
                No matching data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
