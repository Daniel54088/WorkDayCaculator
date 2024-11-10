import React from "react";

interface QuestionHeaderProps {
  question: string | undefined;
}

export const QuestionHeader: React.FC<QuestionHeaderProps> = ({ question }) => {
  return (
    <>
      <h2
        className="text-3xl font-bold text-purple-900 mb-4"
        data-testid="question-header"
      >
        {question ? question : ""}
      </h2>
    </>
  );
};
