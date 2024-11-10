import { z } from "zod";

export type Question = {
  step_id: number;
  question: string;
  answers: string[];
};

export type Match = {
  name: string;
  description: string;
};

export const AnswerSchema = z.object({
  step_id: z.number(), // step_id must be a number
  answer: z.string(), // answer must be a string
});

export type Answer = z.infer<typeof AnswerSchema>;

export type QuestionApiResponse = {
  question: Question | null;
  match: Match | null;
};

export type QuestionApiStatus = {
  loading: boolean;
  error: string | null;
};
