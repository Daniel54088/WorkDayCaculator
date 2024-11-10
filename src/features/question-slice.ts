import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionApiResponse, QuestionApiStatus } from "@/types/question";
import {
  fetchInitialQuestion,
  fetchNextQuestion,
} from "@/features/question-thunk";

const initialState: QuestionApiResponse & QuestionApiStatus = {
  question: {
    step_id: 0,
    question: "",
    answers: [],
  },
  match: null,
  loading: false,
  error: null,
};

// Helper to handle pending state
const setLoading = (state: QuestionApiStatus) => {
  state.loading = true;
};

// Helper to handle success response
const handleSuccess = (
  state: QuestionApiStatus & QuestionApiResponse,
  action: PayloadAction<QuestionApiResponse>
) => {
  state.loading = false;
  state.question = action.payload.question;
  state.match = action.payload.match;
};

// Helper to handle error
const handleError = (
  state: QuestionApiStatus,
  action: PayloadAction<string | null>
) => {
  state.loading = false;
  state.error = action.payload ?? null;
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    resetQuestion: (state) => {
      state.question = initialState.question;
      state.match = initialState.match;
    },
  },
  extraReducers: (builder) => {
    // Fetch initial question
    builder.addCase(fetchInitialQuestion.pending, setLoading);
    builder.addCase(fetchInitialQuestion.fulfilled, (state, action) => {
      handleSuccess(state, action as PayloadAction<QuestionApiResponse>);
    });
    builder.addCase(fetchInitialQuestion.rejected, (state, action) => {
      handleError(state, action as PayloadAction<string | null>);
    });

    // Fetch next question
    builder.addCase(fetchNextQuestion.pending, setLoading);
    builder.addCase(fetchNextQuestion.fulfilled, (state, action) => {
      handleSuccess(state, action as PayloadAction<QuestionApiResponse>);
    });
    builder.addCase(fetchNextQuestion.rejected, (state, action) => {
      handleError(state, action as PayloadAction<string | null>);
    });
  },
});

export const { resetQuestion } = questionSlice.actions;

export default questionSlice.reducer;
