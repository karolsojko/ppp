import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PlansContainer from './containers/PlansContainer'
import ProgressContainer from './containers/ProgressContainer'
import ProblemsContainer from './containers/ProblemsContainer'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={PlansContainer} />
        <Route exact path="/progress" component={ProgressContainer} />
        <Route exact path="/problems" component={ProblemsContainer} />
      </Switch>
    </App>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
