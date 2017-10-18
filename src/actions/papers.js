import axios from "axios";
import {
  ROOT_URL,
  FETCH_QUESTIONS,
  FETCH_PAPERS,
  SAVE_ANSWERS_TOARRAY,
  FLAG_ANSWERS,
  FETCH_FLAG_ANSWERS
} from "./types";

export const getQuestions = paperID => {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/Questions/${paperID}`)
      .then(questions => {
        dispatch({
          type: FETCH_QUESTIONS,
          payload: questions.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getPapers = () => {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/papers`)
      .then(papers => {
        dispatch({ type: FETCH_PAPERS, payload: papers.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const saveAnswersToArray = answer => {
  return function(dispatch) {
    dispatch({
      type: SAVE_ANSWERS_TOARRAY,
      payload: answer
    });
  };
};

export const flagAnswers = answer => {
  return function(dispatch) {
    dispatch({
      type: FLAG_ANSWERS,
      payload: answer
    });
  };
};

export const fetchFlagAnswers = () => {
  return function(dispatch) {
    dispatch({
      type: FETCH_FLAG_ANSWERS
    });
  };
};
