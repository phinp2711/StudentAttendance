import { combineReducers } from 'redux';
import { LOGOUT_USER } from '_constant';
import user from './users';
import course from './courses';
import schedule from './schedules';
import subject from './subjects';

// Combine all reducers.
const appReducers = combineReducers({
  user,
  course,
  schedule,
  subject,
});

const rootReducer = (state, action) => {
  // eslint-disable-next-line no-param-reassign
  if (action.type === LOGOUT_USER) state = undefined;

  return appReducers(state, action);
};

export default rootReducer;
