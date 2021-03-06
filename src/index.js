import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PostIndex from './components/post_index.js';
import PostsShow from './components/posts_show';
import reducers from './reducers';
import promise from 'redux-promise';
import PostNew from './components/post_new.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Switch>
    
    <Route path="/posts/new" component={PostNew} />
    <Route path="/posts/:id" component={PostsShow} />
    <Route path="/" component={PostIndex} />
    </Switch>
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
