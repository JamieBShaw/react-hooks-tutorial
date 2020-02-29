import React, { useState, useContext } from "react";
import friendContext from "../content/friendContext";

const Form = props => {
	const [person, setPerson] = useState({ firstName: "", lastName: "" });

	const context = useContext(friendContext);

	const onChange = e => {
		setPerson({ ...person, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

		const newFriend = {
			firstName: person.firstName.trim(),
			lastName: person.lastName.trim()
		};

		context.addFriend(newFriend);
		setPerson({ firstName: "", lastName: "" });
	};
	return (
		<div className="col">
			<h2> Add Friends </h2>
			<hr />
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="firstName"
						placeholder="First Name..."
						value={person.firstName}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						name="lastName"
						placeholder="Last Name..."
						value={person.lastName}
						onChange={onChange}
					/>
				</div>
				<button className="btn btn-success" type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default Form;
