import { SlugView } from "../features/SlugGenerator/components/SlugView";
import { useLogicSlug } from "../features/SlugGenerator/hooks/useLogicSlug";

export const SlugPage = () => {
  const slugLogic = useLogicSlug();

  return <SlugView {...slugLogic} />;
};
