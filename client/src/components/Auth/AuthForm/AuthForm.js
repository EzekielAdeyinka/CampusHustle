import React from "react";
import { Link } from "react-router-dom";
import classes from "../Auth.module.css";
import Input from "../../UI/Input/Input";

const AuthForm = props => {
	const types = {
		register: (
			<p>
				Already have an account Here?
				<Link to="/vendor-login" className={classes.Link}>
					Login Here
				</Link>
			</p>
		),
		login: (
			<p>
				New Here?
				<Link to="/vendor-signup" className={classes.Link}>
					Sign Up Here
				</Link>
			</p>
		)
	};
	return (
		<form
			action="#"
			method="post"
			className={classes.Form}
			onSubmit={props.submit}
		>
			{props.formElements.map(formElement => (
                <Input
                    auth
                    label={formElement.config.label}
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					touched={formElement.config.touched}
					shouldValidate={formElement.config.validation}
					changed={e => props.inputChangeHandler(e, formElement.id)}
				/>
			))}
			<button type="submit" className={classes.Submit}>
				Submit
			</button>
			{types[props.type]}
			<p>
				Back Home?
				<Link to="/" className={classes.Link}>
					Click Here
				</Link>
			</p>
		</form>
	);
};

export default AuthForm;
