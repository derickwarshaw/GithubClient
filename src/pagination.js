import React from 'react';

class Pagination extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page:1
		};
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	prev() {
		let page = parseInt(localStorage.getItem("page"));
		this.setState({
			page:page > 1 ? page-1:1
		});
		if(page>1)
		this.props.pageCB(page-1);
	}
	next () {
		let page = parseInt(localStorage.getItem("page"));
		this.setState({
			page:page+1
		});
		this.props.pageCB(this.state.page+1);
	}
	render() {
		return (
			<div className="pagination"> 
				{this.state.page<=1 && <a className="disabled"  href="javascript:void(0);" onClick={this.prev}>Previous</a> }
				{this.state.page>1 && <a  href="javascript:void(0);" onClick={this.prev}>Previous</a> }
				<a href="javascript:void(0);" onClick={this.next}>Next</a>				
			</div>
		)
	}
}

export default Pagination;