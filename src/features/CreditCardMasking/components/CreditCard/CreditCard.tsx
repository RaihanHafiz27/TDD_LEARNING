export const CreditCard = ({ maskedNumber }: { maskedNumber: string }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden h-56 flex flex-col justify-between">
      {/* Lighting around the chip */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
      <div className="flex justify-between items-center z-10">
        <div className="text-lg font-bold italic tracking-wider">TDD BANK</div>
        {/* Icon Chip Imitasi */}
        <div className="w-12 h-10 bg-yellow-400/80 rounded border-2 border-yellow-500/50"></div>
      </div>
      <div className="z-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">
          Card Number
        </p>
        {/* Masking Result */}
        <p className="text-3xl font-mono tracking-widest text-gray-100">
          {maskedNumber || "**** **** **** ****"}
        </p>
      </div>
      <div className="flex justify-between z-10 text-sm">
        <div>
          <p className="text-gray-400 text-xs">Cardholder Name</p>
          <p className="font-semibold uppercase tracking-wider">JOHN DOE</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Expires</p>
          <p className="font-semibold">12/28</p>
        </div>
      </div>
    </div>
  );
};
