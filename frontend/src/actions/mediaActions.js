export const ALL_MEDIA_SUCCESS = 'ALL_MEDIA_SUCCESS';
export const ALL_MEDIA_FAILURE = 'ALL_MEDIA_FAILURE';

export const allMediaSuccess = (media) => ({
	type: ALL_MEDIA_SUCCESS,
	media
});

export const allMediaFailure = () => ({
	type: ALL_MEDIA_FAILURE
});

export function getAllMedia() {
	return dispatch => {
		fetch('/api/media/all', {
			method: 'get',
			headers: {
				'Accept': 'application/json, text/plain, */*'
			}
		}).then(res => {
			res.json().then(data => {
				dispatch(allMediaSuccess(data));
			});
		})
		.catch(err => {
			dispatch(allMediaFailure());
		});
	}
}

export function postMedia(title, author, type, link) {
	return dispatch => {
		fetch('/api/media/new', {
			method: 'post',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({'title': title, 'author': author, 'type': type, 'link': link})
		})
	}
}

export function deleteMedia(id) {
	return dispatch => {
		fetch('/api/media/delete/${id}', {
			method: 'delete',
			headers: {
				'Accept': 'application/json, text/plain, */*'
			}
		})
	}
}

