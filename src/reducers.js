import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearchRobots = {
  searchField: ''
}
/*
add key/value pairs to an existing object
object.assign([target object], objects to add, ..., )
ex- Object.assign(initialState, {name: bob}, {age: 25})

create a new object from an existing one
Object.assign({}, target object, objects to add, ...)
ex- Object.assign({}, initialState, {searchField: [insert text variable here]})
this will create a copy of initialState object, and then add/edit searchField key/val pair
*/
export const searchRobots = (state=initialStateSearchRobots, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state;
  }
}


const initialStateRequestRobots = {
  isPending: false,
  robots: [],
  error: ''
};

export const requestRobots = (state=initialStateRequestRobots, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload}, {isPending: false})
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload}, {isPending: false})
    default:
      return state
  }
}
