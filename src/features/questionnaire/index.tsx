import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { useAppSelector, useAppDispatch } from "@/hooks/react-redux";
import {
  fetchInitialQuestion,
  fetchNextQuestion,
} from "@/features/question-thunk";

import { QuestionHeader } from "./components/question-header";
import { AnswerOptions } from "./components/answer-options";

export default function Questionnaire() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, question, match } = useAppSelector((state) => {
    return state.question;
  });
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  useEffect(() => {
    dispatch(fetchInitialQuestion());
  }, []);

  useEffect(() => {
    if (match) {
      localStorage.setItem("match", JSON.stringify(match));
      navigate("/result");
    }
  }, [match]);

  const handleNextQuestion = () => {
    dispatch(
      fetchNextQuestion({
        step_id: question?.step_id || 0,
        answer: selectedAnswer,
      })
    );
    setSelectedAnswer("");
  };

  return (
    <>
      <QuestionHeader question={question?.question} />
      <AnswerOptions
        answers={question?.answers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />
      <Button
        onClick={handleNextQuestion}
        variant="default"
        size="lg"
        className="bg-purple-600  rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        disabled={!selectedAnswer}
        isLoading={loading}
      >
        ok
      </Button>
    </>
  );
}
