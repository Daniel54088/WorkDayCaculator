import { IntroductionLayout } from "@/components/layouts";

import Result from "@/features/result";

export const ResultRoute = () => {
  const backgroundImage = 'url("src/assets/garden.jpg")';
  return (
    <>
      <IntroductionLayout backgroundImage={backgroundImage}>
        <Result />
      </IntroductionLayout>
    </>
  );
};
