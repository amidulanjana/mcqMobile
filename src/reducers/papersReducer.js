import { FETCH_QUESTIONS, FETCH_PAPERS } from "../actions/types";

const INITIAL_QUESTIONS = { questions: "" };
const INITIAL_PAPERS = { papers: "" };

export default (state = INITIAL_QUESTIONS, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case FETCH_PAPERS:
      return { ...state, papers: action.payload };
    default:
      return state;
  }
};
