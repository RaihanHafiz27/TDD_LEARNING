import { PasswordView } from "../features/PasswordChecker/PassowrdView";
import { validatePassword } from "../features/PasswordChecker/utils/password";
import { usePassword } from "../features/PasswordChecker/hooks/usePassword";

export const PasswordPage = () => {
  const statePassword = usePassword();

  const validation = validatePassword(statePassword.password);

  return <PasswordView {...statePassword} validation={validation} />;
};
