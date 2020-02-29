import React, { useRef, useContext } from "react";
import friendContext from "../content/friendContext";
import { useForm } from "../hooks";

const Form = props => {
	const context = useContext(friendContext);

	const firstNameInput = useRef(null);

	const validatePersonData = values => {
		let errors = {};
		if (values.firstName.trim() === "") {
			errors.firstName = "First name field must not be empty ";
		}
		if (values.lastName.trim() === "") {
			errors.lastName = "Last name field must not be empty";
		}
		return errors;
	};

	const addFriendFromForm = () => {
		context.addFriend(values);
		firstNameInput.current.focus();
	};
	const { values, errors, onChange, onSubmit } = useForm(
		addFriendFromForm,
		{ firstName: "", lastName: "" },
		validatePersonData
	);

	// const printNumberOfFriends = useCallback(() => {
	// 	console.log(`Number of friends: ${context.friends.length}`);
	// }, [context.friends.length]);

	return (
		<div className="col">
			<h2> Add Friends </h2>
			<hr />
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<input
						type="text"
						className={`form-control ${errors.firstName ? "is-invalid" : null}`}
						name="firstName"
						placeholder="First Name..."
						ref={firstNameInput}
						value={values.firstName}
						onChange={onChange}
					/>
					{errors.firstName && (
						<div className="invalid-feeback">{errors.firstName}</div>
					)}
				</div>
				<div className="form-group">
					<input
						type="text"
						className={`form-control ${errors.lastName ? "is-invalid" : null}`}
						name="lastName"
						placeholder="Last Name..."
						value={values.lastName}
						onChange={onChange}
					/>
				</div>
				{errors.lastName && (
					<div className="invalid-feeback">{errors.lastName}</div>
				)}
				<button className="btn btn-success" type="submit">
					Add
				</button>
			</form>
		</div>
	);
};

export default Form;
