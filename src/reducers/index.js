import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TasksReducer from './reducerTasks';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  tasks: TasksReducer,
  form: formReducer
});

export default rootReducer;
