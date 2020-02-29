import React, { useContext } from "react";
import uuid from "react-uuid";
import friendContext from "../content/friendContext";
const Friends = () => {
	const context = useContext(friendContext);
	return (
		<div className="col">
			<h2> Freinds </h2>
			<hr />
			{context.friends.map(p => {
				return (
					<div key={uuid()}>
						<p>
							{" "}
							{p.firstName} {p.lastName}{" "}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default Friends;
