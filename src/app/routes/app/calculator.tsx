import { WorkDaysCalculatorLayout } from "@/components/layouts";

import Calculator from "@/features/calculator";

export const CalculatorRoute = () => {
  return (
    <>
      <WorkDaysCalculatorLayout>
        <Calculator />
      </WorkDaysCalculatorLayout>
    </>
  );
};
