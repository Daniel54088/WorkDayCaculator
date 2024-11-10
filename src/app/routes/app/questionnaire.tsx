import { QuestionnaireLayout } from "@/components/layouts";
import Questionnaire from "@/features/questionnaire";

export const QuestionnaireRoute = () => {
  return (
    <QuestionnaireLayout>
      <Questionnaire />
    </QuestionnaireLayout>
  );
};
