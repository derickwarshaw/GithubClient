import React from 'react';
import Pagination from './pagination';
import {Link} from 'react-router-dom';

class Issues extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page:0,
			issues:[],
		};
		this.paginate = this.paginate.bind(this);
	}
	componentDidMount(){
		fetch("https://api.github.com/repos/facebook/react/issues?page="+localStorage.getItem("page")).then(data=>data.json())
			.then(res=> {
				this.setState({
					issues:res
				});
		});
	}
	componentWillUpdate(prevProps, prevState){
		if(prevProps.page!=prevState.page){
			fetch("https://api.github.com/repos/facebook/react/issues?page="+localStorage.getItem("page")).then(data=>data.json())
				.then(res=> {
				this.setState({
					issues:res
				});
			});
		}
	}
	paginate(page) {
		console.log("page " +page ) 
		this.setState({
			page:page
		});
		localStorage.setItem("page",page);
	}
	render() {
		var self = this;
		var mpIssues = this.state.issues.map(function(data,i){
			let comment_id = data.comments_url.split("issues")[1].split("comments")[0];
			return <li key={i}>
				<Link to={"/comments"+comment_id} >
					{openIcon}	
					{data.title}
					<span className="comments"><span className="comments_cnt">{data.comments}</span>{commentIcon} </span>
				</Link>
				</li>
		});
		return (
			<div>
			Issues
				<div className="IssuesTable">
					<ul>
					{mpIssues}
					</ul>
				</div>
				<Pagination pageCB={this.paginate}/>
			</div>
		)
	}
}


const openIcon = <svg className="octicon octicon-issue-opened open" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
const commentIcon = <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>;


export default Issues;