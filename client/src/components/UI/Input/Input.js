import React from "react";
import authClasses from "../../Auth/Auth.module.css";

const input = props => {
	console.log(props);
	let inputElement = null;
	const inputClasses = ["Form_field"];
	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push("Invalid");
	}
	if (props.auth) {
		inputClasses.pop();
		inputClasses.push(authClasses.Input);
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
	const jsx = props.auth ? (
		<React.Fragment>
			{props.label ? (
				<label for={props.elementConfig.id} className={authClasses.Label}>
					{props.label.text}
				</label>
			) : null}
			{inputElement}
		</React.Fragment>
	) : (
		<div className={"Form_group"}>{inputElement}</div>
	);
	return jsx;
};

export default input;
