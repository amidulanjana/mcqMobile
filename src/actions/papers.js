import axios from "axios";
import { ROOT_URL, FETCH_QUESTIONS, FETCH_PAPERS } from "./types";

export const getQuestions = () => {
  return function(dispatch) {
    axios
      .get(`${ROOT_URL}/Questions/59c53cf6c497e22a8cd86555`)
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
