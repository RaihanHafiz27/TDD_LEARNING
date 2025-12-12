// 1. Define the output form of our function.
export interface PasswordResult {
  isValid: boolean;
  errors: string[];
}

// 2. Pure Function: Input string -> Output object
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
    isValid: errors.length === 0, // Logic for case 4 will be success (valid) if length = 0
    errors: errors,
  };
};
