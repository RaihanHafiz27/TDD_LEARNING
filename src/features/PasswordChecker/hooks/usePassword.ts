import { useEffect, useState } from "react";

export const usePassword = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    password,
    setPassword,
  };
};
