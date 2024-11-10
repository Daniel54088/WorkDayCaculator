import React from "react";
import { Label } from "@/components/ui/label/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";

interface AnswerOptionsProps {
  answers: string[] | undefined;
  selectedAnswer: string;
  setSelectedAnswer: (value: string) => void;
}

export const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <div className="my-6">
      <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
        {answers?.map((answer) => (
          <div className="flex items-center space-x-2" key={answer}>
            <RadioGroupItem
              value={answer}
              id={answer}
              data-testid="answer-option"
            />
            <Label htmlFor={answer} data-testid="answer-label">
              {answer}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};
