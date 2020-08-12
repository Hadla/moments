import firebaseApp from './firebase';

//Reducer: a function that contains the state for the application (higher order funcs)
import { userActions, collectionActions } from './actions';
import { auth } from 'firebase';

export function userReducer(state = { email: null, name: 'hadla', userId: null }, action) {
  switch (action.type) {
    case userActions.SET_USER_INFO_ACTION:
      //Return new state
      return action.payload;
    // If no new state, return old state
    default:
      return state;
  }
}
export function loginReducer(state = { email: null, name: 'hadla', userId: null }, action) {
  if (action.type === userActions.SET_LOGIN_INFO_ACTION) {
    return action.payload;
  }
  return state;
}

export function collectionReducer(state = [], action) {
  switch (action.type) {
    case collectionActions.CREATE_NEW_COLLECTION_SUCCESS:
      return state;
    case collectionActions.SET_COLLECTIONS_ACTION:
      console.log('New state: ', action.payload);

    // return state;
    default:
      return state;
  }
}
