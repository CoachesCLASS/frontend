import { combineReducers } from "redux";
import {
  SET_INSTRUCTOR,
} from '../actionTypes';

const instructorDefaultState = {
  isInstructor: false,
}

const instructor = (state = instructorDefaultState, action) => {
  switch (action.type) {
    case SET_INSTRUCTOR: 
      return {
        ...state,
        isInstructor: action.isInstructor
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  instructor,
})

export default reducer;
