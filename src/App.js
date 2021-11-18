import React from 'react';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import Results from './Components/results';
import Form from './Components/survey';
import './Components/Home.css';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}