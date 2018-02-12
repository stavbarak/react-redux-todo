import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import TasksIndex from './components/TasksIndex';
import NewTask from './components/NewTask';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={ TasksIndex } />
        <Route path="/tasks/new" component={ NewTask } />
      </div>  
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
