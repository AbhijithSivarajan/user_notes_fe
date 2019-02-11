import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import UserNotes from './components/UserNotes';
import { history } from "./helpers/history";

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="container jumbotron">
		<div className="col-sm-8 col-sm-offset-2">
			<Router history={history}>
				<div>
					<Route exact path="/" component={Login} />
					<Route path="/user_notes" component={UserNotes} />
				</div>
			</Router>
		</div>
	</div>
    );
  }
}

export default App;
