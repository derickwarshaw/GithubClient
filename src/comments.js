import React from 'react';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments_url:"",
			comments : []
		};
	}
	componentDidMount() {
		let id = this.props.match.params.id;
		let url  = "https://api.github.com/repos/facebook/react/issues/"+id+"/comments";
		fetch(url).then(data=>data.json())
		.then(res=> {
			this.setState({
				comments:res
			});
		});
	}
	render () {
		var mpComments = this.state.comments.map(function(data,i){
			return <li key={i}> {data.body} </li>
		});
		return (
			<div> 
			Comments 
				<div className="CommentsTable">
					<ul>
						{mpComments}
					</ul>
				</div>
			</div>
		);
	}
}

export default Comments;