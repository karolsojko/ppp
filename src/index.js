import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PlansPage from './components/PlansPage'
import ProgressPage from './components/ProgressPage'
import ProblemsPage from './components/ProblemsPage'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={PlansPage} />
        <Route exact path="/progress" component={ProgressPage} />
        <Route exact path="/problems" component={ProblemsPage} />
      </Switch>
    </App>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
