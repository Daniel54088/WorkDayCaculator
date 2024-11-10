import { configureStore } from "@reduxjs/toolkit";
import { questionSlice } from "@/features/question-slice";
import calculatorSlice from "@/features/calculator-slice";

export const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
    calculator: calculatorSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;