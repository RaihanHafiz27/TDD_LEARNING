import { useState } from "react";
import { maskCreditCard } from "../features/CreditCardMasking/utils/creditCardMasking";
// import { Link } from "react-router-dom";
// import { maskCreditCard } from "./masking";

export const MaskingPage = () => {
  const [rawInput, setRawInput] = useState("");

  // TDD Logic beraksi di sini
  // const maskedNumber = maskCreditCard(rawInput);

  const maskCreditCard = (cardNumber: string): string => {
    // 1. Remove all characters other than numbers (0-9) with "\D", which means “Non-Digit.”
    const cleaned = cardNumber.replace(/\D/g, "").replace(/[\s_]+/g, "-");

    if (!cleaned) return "";

    if (cleaned.length <= 4) return cleaned;

    const last4 = cleaned.slice(-4);

    const maskedLength = cleaned.length - 4;
    const maskedSection = "*".repeat(maskedLength);

    const fullMasked = maskedSection + last4;

    const group = fullMasked.match(/.{1,4}/g);

    console.log(cleaned);
    console.log(maskedLength);
    console.log(maskedSection);
    console.log(fullMasked);
    console.log(group);

    return group ? group.join(" ") : fullMasked;
  };

  console.log(maskCreditCard("Aba4500123456789010sakajkklsjakjjask"));

  return (
    <div>Hello World</div>
    // <div className="max-w-xl mx-auto mt-10 p-6">

    //   {/* Header */}
    //   <div className="flex justify-between items-center mb-8">
    //     <h2 className="text-2xl font-bold text-gray-800">💳 CC Masking</h2>
    //     <Link to="/" className="text-blue-600 hover:underline text-sm">← Menu</Link>
    //   </div>

    //   <div className="space-y-8">

    //     {/* Visual Kartu Kredit (Preview) */}
    //     <div className="bg-gradient-to-tr from-gray-900 to-gray-700 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden h-56 flex flex-col justify-between">

    //       {/* Hiasan background biar keren */}
    //       <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

    //       <div className="flex justify-between items-center z-10">
    //         <div className="text-lg font-bold italic tracking-wider">TDD BANK</div>
    //         {/* Icon Chip Imitasi */}
    //         <div className="w-12 h-10 bg-yellow-400/80 rounded border-2 border-yellow-500/50"></div>
    //       </div>

    //       <div className="z-10">
    //         <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Card Number</p>
    //         {/* HASIL MASKING TAMPIL DI SINI */}
    //         <p className="text-3xl font-mono tracking-widest text-gray-100">
    //           {maskedNumber || '**** **** **** ****'}
    //         </p>
    //       </div>

    //       <div className="flex justify-between z-10 text-sm">
    //         <div>
    //           <p className="text-gray-400 text-xs">Cardholder Name</p>
    //           <p className="font-semibold uppercase tracking-wider">RAIHAN HAFIZ</p>
    //         </div>
    //         <div>
    //           <p className="text-gray-400 text-xs">Expires</p>
    //           <p className="font-semibold">12/28</p>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Input Form user */}
    //     <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    //       <label className="block text-sm font-bold text-gray-700 mb-2">
    //         Input Nomor Kartu Kredit:
    //       </label>
    //       <input
    //         type="text"
    //         value={rawInput}
    //         onChange={(e) => setRawInput(e.target.value)}
    //         placeholder="Contoh: 4500 1234 5678 9010"
    //         className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-lg transition"
    //         maxLength={20} // Batasi panjang input (16 digit + spasi)
    //       />
    //       <p className="text-xs text-gray-500 mt-3">
    //         *Ketik nomor sembarangan. Huruf dan simbol otomatis dibuang oleh TDD logic kita.
    //       </p>
    //     </div>

    //   </div>
    // </div>
  );
};
