import * as actionTypes from "./actionTypes";

const addFriend = (friend, state) => {
	const newFriend = [...state.friends, friend];
	return {
		...state,
		friends: newFriend
	};
};

const friendReducer = (state, action) => {
	switch (action.type) {
		case actionTypes.ADD_FRIEND:
			return addFriend(action.payload, state);

		case actionTypes.REMOVE_FRIEND:
			return {
				...state
			};

		default:
			return state;
	}
};

export default friendReducer;
