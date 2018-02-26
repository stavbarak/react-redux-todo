import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TasksIndex from './components/TasksIndex';
import NewTask from './components/NewTask';
import TaskView from './components/TaskView';

const store = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="aligner">
        <Switch>       
          <Route path="/tasks/new" component={ NewTask } />
          <Route path="/tasks/:id" component={ TaskView } />
          <Route path="/" component={ TasksIndex } />       
        </Switch>
      </div>  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
