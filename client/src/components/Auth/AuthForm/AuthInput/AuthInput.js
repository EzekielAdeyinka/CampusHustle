import React from "react";

const AuthInput = props => {
	let inputElement = null;
	const inputClasses = [];
	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push("Invalid");
	}
	switch (props.elementType) {
		case "input":
			inputElement = (
				<input
					className={inputClasses.join(" ")}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "textarea":
			inputElement = (
				<textarea
					className={inputClasses.join(" ")}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
			break;
		case "select":
			inputElement = (
				<select className={inputClasses.join(" ")} onChange={props.changed}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = (
				<input
					className={inputClasses.join(" ")}
					{...props.elementConfig}
					value={props.value}
					onChange={props.changed}
				/>
			);
	}
	return (
		<React.Fragment>
			{props.label ? (
				<label for={props.elementConfig.id}>{props.label.text}</label>
			) : null}
			{inputElement}
		</React.Fragment>
	);
};

export default AuthInput;
