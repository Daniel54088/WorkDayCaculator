import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/lib/api-client";
import { Answer, QuestionApiResponse } from "@/types/question";

export const fetchInitialQuestion = createAsyncThunk<QuestionApiResponse>( // The type of the fulfilled action's payload
  "question/fetchInitialQuestion",
  async () => {
    const response = await api.get<QuestionApiResponse>(`/api/begin`);
    return response.data;
  }
);

export const fetchNextQuestion = createAsyncThunk(
  "question/fetchNextQuestion",
  async (postData: Answer) => {
    const response = await api.post(`/api/answer`, postData);
    return response.data;
  }
);
