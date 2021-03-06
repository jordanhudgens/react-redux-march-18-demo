import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className="container">
          <Route exact path="/posts/new" component={PostsNew} />
          <Route exact path="/post/:id" component={PostsShow} />
          <Route exact path="/" component={PostsIndex} />
        </div>
      </BrowserRouter>
    </Provider>,
    document.querySelector('.app-wrapper'),
  );
}

document.addEventListener('DOMContentLoaded', main);
