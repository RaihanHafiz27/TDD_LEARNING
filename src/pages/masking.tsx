import { MaskingView } from "../features/CreditCardMasking/components/MaskingView";
import { useLogicCreditCardMasking } from "../features/CreditCardMasking/hooks/useLogicCreditCardMasking";

export const MaskingPage = () => {
  const maskingLogic = useLogicCreditCardMasking();

  return <MaskingView {...maskingLogic} />;
};
