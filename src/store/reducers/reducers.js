import { combineReducers } from "redux";
import {
  SET_INSTRUCTOR,
} from '../actionTypes';
import {
  SET_ID,
} from '../actionTypes';
import { 
  SET_COURSES
} from '../actionTypes';

const instructorDefaultState = {
  isInstructor: false,
}
const coursesState = {
  courses: [],
}
const idDefaultState = {
  id: 2,
}

const allCourses = (state = coursesState, action) => {
  switch(action.type) {
       case SET_COURSES: return  {
            ...state,
            courses: action.courses,
        }
        default: {
           return state;
        }
  }
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
  allCourses,
})

export default reducer;
