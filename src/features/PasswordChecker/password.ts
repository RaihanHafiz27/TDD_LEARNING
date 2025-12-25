export interface PasswordResult {
  isValid: boolean;
  errors: string[];
}

export const validatePassword = (password: string): PasswordResult => {
  const errors: string[] = [];

  // Logic for case 1
  if (password.length < 8) {
    errors.push("Min 8 characters");
  }

  // Logic for case 2
  if (!/\d/.test(password)) {
    errors.push("Must have number");
  }

  // Logic for case 3
  if (!/[A-Z]/.test(password)) {
    errors.push("Must have capital");
  }

  return {
    // Logic for case 4 will be success (valid) if length = 0
    isValid: errors.length === 0,
    errors: errors,
  };
};
