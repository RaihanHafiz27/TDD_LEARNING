import { useState } from "react";
import { maskCreditCard } from "../utils/creditCardMasking";

export const useLogicCreditCardMasking = () => {
  const [rawInput, setRawInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Take input and immediately discard letters/symbols
    let inputValue = e.target.value.replace(/\D/g, "");

    // Maximum 16 digits (Visa/Mastercard standard)
    if (inputValue.length > 16) {
      inputValue = inputValue.slice(0, 16);
    }

    // Save on the state
    setRawInput(inputValue);
  };

  // Logic TDD
  const maskedNumber = maskCreditCard(rawInput);

  return {
    rawInput,
    handleInputChange,
    maskedNumber,
  };
};
