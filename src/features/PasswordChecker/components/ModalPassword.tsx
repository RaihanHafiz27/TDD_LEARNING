export const ModalPassword = () => {
  return (
    <div className="absolute z-50 bg-gray-950/70 inset-0 grid place-items-center">
      <div className="bg-slate-50 w-96 h-[60vh] rounded-lg p-8 flex flex-col items-center justify-evenly">
        <img src="/check.png" alt="succes" className="w-36 h-auto" />
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-green-600">Success!!!</h3>
          <p className="text-gray-700">Your password has been saved.</p>
        </div>
      </div>
    </div>
  );
};
