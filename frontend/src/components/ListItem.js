import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, duplicateArticle } from '../action/mediaActions';

class ListItem extends Component {
render() {
	return (
		<div>
		<a href={'/article/${this.props.id}'}>{this.props.title}</a>
		</div>
	);
}

}

export default ListItem;
