import { RECEIVE_SHOWS } from './ReduxActions';

export default function(state = [], action) {
  switch (action.type) {
  case RECEIVE_SHOWS:
    return { ...state, all: action.payload.data };
  }
  return state;
}
