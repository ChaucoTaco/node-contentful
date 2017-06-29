import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/';
import Global from './components/Global/';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Global} />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
