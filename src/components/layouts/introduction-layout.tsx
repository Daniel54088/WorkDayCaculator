import * as React from "react";

type IntroductionLayoutProps = {
  children: React.ReactNode;
  backgroundImage: string;
};

export const IntroductionLayout = ({
  children,
  backgroundImage,
}: IntroductionLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-center md:w-2/6 bg-purple-100 px-8 md:px-16 py-12">
          {children}
        </div>

        <div
          className="hidden md:block md:w-4/6 bg-cover bg-no-repeat"
          style={{ backgroundImage: backgroundImage }}
        ></div>
      </div>
    </>
  );
};
