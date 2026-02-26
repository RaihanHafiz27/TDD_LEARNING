export const maskCreditCard = (cardNumber: string): string => {
  // Remove all characters other than numbers.
  const cleaned = cardNumber.replace(/\D/g, "");

  if (!cleaned) return "";
  if (cleaned.length <= 4) return cleaned;

  // Take the last 4 digits in their entirety
  const last4 = cleaned.slice(-4);

  // Count how many digits in front need to be censored (changed to *).
  const maskedLength = cleaned.length - 4;
  const maskedSection = "*".repeat(maskedLength);

  // Combine the star and the last 4 digits
  const fullMasked = maskedSection + last4;
  // Format to make it look nice: break it into groups of 4 characters
  const group = fullMasked.match(/.{1,4}/g);

  // Combine arrays with spaces
  return group ? group.join(" ") : fullMasked;
};
