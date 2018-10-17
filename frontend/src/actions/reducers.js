import { combineReducers } from 'redux';
import { ALL_MEDIA_SUCCESS, ALL_MEDIA_FAILURE } from './mediaActions';

const initialState = {
	media: {
		mediaList: [],
		media: {}
	}
}

function media(state = initialState.media, action) {
	switch(action.type) {
		case ALL_MEDIA_SUCCESS:
			return {
				...state,
				mediaList: action.media
			}
		case ALL_MEDIA_FAILURE:
			return state;
		default:
			return state;
	}
}

const reducers = combineReducers({media});

export default reducers;
