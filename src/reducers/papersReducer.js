import _ from "lodash";
import {
  FETCH_QUESTIONS,
  FETCH_PAPERS,
  SAVE_ANSWERS_TOARRAY,
  FLAG_ANSWERS,
  FETCH_FLAG_ANSWERS
} from "../actions/types";

export default (state = { answersList: [], flagList: [] }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case FETCH_PAPERS:
      return { ...state, papers: action.payload };
    case SAVE_ANSWERS_TOARRAY:
      if (!_.find(state.answersList, action.payload)) {
        return {
          ...state,
          answersList: [...state.answersList, action.payload]
        };
      }
      return { ...state };
    case FLAG_ANSWERS:
      if (!_.includes(state.flagList, action.payload)) {
        return { ...state, flagList: [...state.flagList, action.payload] };
      }
      return { ...state };
    case FETCH_FLAG_ANSWERS:
      return { ...state };
    default:
      return state;
  }
};
