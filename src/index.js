import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom';
import { Switch, Redirect,browserHistory } from 'react-router';
import Comments from './comments';
import Issues from './issues';

require("../styles/index.scss");

class Github extends React.Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		localStorage.setItem("page",1);
	}
	render() {
		return (
			<div> 
			<HashRouter >
		    	<div>

		        	<Switch>
		          		<Route exact path="/" component={Issues} />
		          		<Route exact path="/comments/:id" component={Comments} />
		        	</Switch>
		    	</div>
		  	</HashRouter>
			</div> 
		);
	}
}

ReactDOM.render(<Github/> , document.getElementById("app"));

export default Github;