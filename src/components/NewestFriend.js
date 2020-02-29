import React, { useEffect } from "react";
import FriendCount from "./FriendsCount";
import { useContext } from "react";
import friendContext from "../content/friendContext";

const NewestFriend = () => {
	const context = useContext(friendContext);
	const newestFriend = context.friends[context.friends.length - 1];

	useEffect(() => {
		const newestAddedFriend = `${newestFriend.firstName} ${newestFriend.lastName}`;
		document.title = newestAddedFriend;
		return () => {
			console.log("Unmount");
		};
	}, [newestFriend]);

	return (
		<div className="col col-sm-12">
			<h3 className="mt-4 text-center">
				{" "}
				Recently Added Friend:
				{`${newestFriend.firstName} ${newestFriend.lastName}`}{" "}
			</h3>
			<FriendCount />
		</div>
	);
};

export default NewestFriend;
