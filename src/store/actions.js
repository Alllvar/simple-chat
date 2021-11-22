import {
  ADD_MESSAGE,
  SET_MESSAGES,
} from './constants';

export const addMessage = (payload) => ({ type: ADD_MESSAGE, payload });
export const setMessages = (payload) => ({ type: SET_MESSAGES, payload });

