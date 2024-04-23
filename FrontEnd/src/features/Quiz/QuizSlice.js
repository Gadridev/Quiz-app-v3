import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Quiz: [],
  questions: [],
  answer: null,
  index: 0,
  secondRomaining: null,
  points: 0,
  highScoore: 0,
};
const SEC_PER_QUESTION = 10;
const quizSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    active(state, action) {
      state.Quiz.push(action.payload);
      state.secondRomaining =
        state.Quiz[0]?.questions.length * SEC_PER_QUESTION;
      state.questions = state.Quiz[0].questions;
    },
    newAnswer(state, action) {
      const question = state.questions[state.index];
      state.answer = action.payload;
      state.points =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;
    },
    nextQuestion(state) {
      state.index = state.index + 1;
      state.answer = null;
    },
    tick(state) {
      state.secondRomaining =
        state.secondRomaining <= 0 ? 0 : state.secondRomaining - 1;
    },
    clear(state) {
      state.Quiz = [];
      state.questions = [];
      state.answer = null;
      state.index = 0;
      state.secondRomaining = null;
      state.points = 0;
      state.highScoore = 0;
    },
    finish(state) {
      state.highScoore =
        state.points > state.highScoore ? state.points : state.highScoore;
    },
    restart(state) {
      return { ...initialState, Quiz: state.Quiz };
    },
  },
});
export const { active, clear, newAnswer, nextQuestion, tick, finish, restart } =
  quizSlice.actions;

export default quizSlice.reducer;
