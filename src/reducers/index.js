import { combineReducers } from 'redux';
import TasksReducer from './reducerTasks';

const rootReducer = combineReducers({
  tasks: TasksReducer
  //state: (state = {}) => state
});

export default rootReducer;
