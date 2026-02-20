import { useState } from "react";
import { generateSlug } from "../utils/slugGenerator";

export const useLogicSlug = () => {
  const [title, setTitle] = useState("");
  const [copied, setCopied] = useState(false);

  // TDD Logic berjalan secara real-time
  const slugResult = generateSlug(title);
  const finalUrl = `https://xyz-blog.com/post/${slugResult}`;

  // Helper untuk fitur Copy to Clipboard
  const handleCopy = () => {
    if (!slugResult) return;
    navigator.clipboard.writeText(finalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset tulisan copy setelah 2 detik
  };
  return {
    titleValue: title,
    onTitleChange: setTitle,
    slugResult,
    handleCopy,
    copied,
  };
};
