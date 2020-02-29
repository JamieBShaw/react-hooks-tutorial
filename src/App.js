import React, { useReducer } from "react";
import Form from "./components/Form";
import Friends from "./components/Friends";
import NewestFriend from "./components/NewestFriend";

import FriendContext from "./content/friendContext";
import FriendReducer from "./content/friendReducer";
import * as actionTypes from "./content/actionTypes";

function App() {
	const initialState = {
		friends: [
			{
				firstName: "James",
				lastName: "Flint"
			},
			{
				firstName: "Barry",
				lastName: "Alderson"
			}
		]
	};

	const [state, dispatch] = useReducer(FriendReducer, initialState);

	console.log(initialState);

	const addFriend = newFriend => {
		console.log(newFriend);
		console.log(state);
		dispatch({
			type: actionTypes.ADD_FRIEND,
			payload: newFriend
		});
	};

	return (
		<FriendContext.Provider
			value={{
				friends: state.friends,
				addFriend
			}}>
			<div className="container mt-4">
				<div className="row">
					<Form />
					<Friends />
					<NewestFriend />
				</div>
			</div>
		</FriendContext.Provider>
	);
}

export default App;
