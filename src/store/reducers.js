import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
  ADD_MESSAGE,
  SET_MESSAGES,
} from './constants';

export const initialMessagesState = {
  data: [],
};

const messagesReducer = (state = initialMessagesState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { data: [...state.data, action.payload] };
    case SET_MESSAGES:
      return { data: action.payload };
    default:
      return state;
  }
};

export default (history) => combineReducers({
  router: connectRouter(history),
  messages: messagesReducer,
});
