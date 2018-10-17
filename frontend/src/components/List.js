import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends Component {
	componentDidMount() {
		this.props.dispatchGetAllMedia();
	}

	render() {
		const { mediaList } = this.props;

		return (
			<div>
			{mediaList.map(media => {
				return (<ListItem title={media.title} author={media.author} type={media.type} link={media.link} />)
			})}
			</div>
		);
	}

	const mapDispatchToProps = dispatch => {
		return {
			dispatchGetAllMedia: () => {
				dispatch(getAllMedia());
			}
			dispatchPostMedia: (title, author, type, link) => {
				dispatch(postMedia(title, author, type, link));
			}
		}
	}

	const mapStateToProps = state => {
		return {
			media: state.media.mediaList
		};
	}

}
