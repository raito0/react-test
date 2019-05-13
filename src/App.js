import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Read from './components/read.component';
class App extends React.Component {
	componentDidMount(){
  	// this.props.fetchPostsWithRedux()
  }
	render(){
	  return (
			<Router>
			<div className="container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link to={'/'} className="navbar-brand">Home</Link>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link to={'/create'} className="nav-link">Create</Link>
							</li>
							<li className="nav-item">
								<Link to={'/read'} className="nav-link">Read</Link>
							</li>
						</ul>
					</div>
				</nav> <br/>
				
				<Switch>
						<Route exact path='/create' component={ Create } />
						<Route path='/read' component={ Read } />
				</Switch>
			</div>
		</Router>
    )
  }
}

export default App;
