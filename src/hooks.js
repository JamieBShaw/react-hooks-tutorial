import { useState } from "react";

export const useForm = (callback, initalState = {}, validate) => {
	const [values, setValues] = useState(initalState);
	const [errors, setErrors] = useState({});

	const onChange = event => {
		setValues({ ...values, [event.target.name]: event.target.value });
	};

	const onSubmit = event => {
		event.preventDefault();

		if (Object.keys(validate(values)).length === 0) {
			callback();
			setValues(initalState);
			setErrors({});
		} else {
			setErrors(validate(values));
		}
	};

	return {
		onChange,
		onSubmit,
		errors,
		values
	};
};
