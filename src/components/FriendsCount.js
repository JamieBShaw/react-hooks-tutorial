import React, { useContext } from "react";
import friendContext from "../content/friendContext";

const FriendCount = props => {
	const context = useContext(friendContext);
	return <h2 className="text-center mt-4">{context.friends.length}</h2>;
};

export default FriendCount;
