import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/';
import Post from './components/post/';
import './components/globals/styles.scss';
import './components/globals/reset.scss';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Post} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
