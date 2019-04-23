import { combineReducers } from "redux";
import {
  SET_INSTRUCTOR,
} from '../actionTypes';
import {
  SET_ID,
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
const idDefaultState = {
  id: 0,
}
const userId = (state = idDefaultState, action) => {
  switch (action.type) {
    case SET_ID: 
      return {
        ...state,
        id: action.id
      }
    default:
      return state;
  }
}
const reducer = combineReducers({
  instructor,
  userId,
})

export default reducer;
