import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home/';
import Global from './components/Global/';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={Global}/>
    </div>
  </Router>
);

ReactDOM.render(<App/>, document.getElementById('app'));
