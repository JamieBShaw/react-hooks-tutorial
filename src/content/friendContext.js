import { createContext } from "react";

const friendContext = createContext({
	friends: [],
	addFriend: friend => {},
	removeFriend: friendId => {}
});

export default friendContext;
