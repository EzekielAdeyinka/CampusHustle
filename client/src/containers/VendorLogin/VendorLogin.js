import React from "react";
import classes from "../../components/Auth/Auth.module.css";
import AuthLeft from "../../components/Auth/AuthLeft/AuthLeft";
import { updateObject, checkValidity } from "../../shared/utility";
import AuthForm from "../../components/Auth/AuthForm/AuthForm";

class VendorLogin extends React.Component {
	state = {
		controls: {
			email: {
				elementType: "input",
				elementConfig: {
					type: "email",
					name: "email",
					id: "email"
				},
				label: {
					text: "Email"
				},
				value: "",
				validation: {
					required: true,
					isEmail: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: "inpit",
				elementConfig: {
					type: "password",
					name: "password",
					id: "password"
                },
                label: {
                    text: "Password"
                },
				value: "",
				validation: {
					required: true,
					minLength: 7
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false
	};

	inputChangeHandler = (e, inputId) => {
		const formElement = updateObject(this.state.controls[inputId], {
			value: e.target.value,
			valid: checkValidity(
				e.target.value,
				this.state.controls[inputId].validation
			),
			touched: true
		});

		const form = updateObject(this.state.controls, {
			[inputId]: formElement
		});

		let formIsValid = true;
		for (let inputId in form) {
			formIsValid = form[inputId].valid && formIsValid;
		}

		this.setState({ controls: form, formIsValid });
	};

	handleVendorLogin = e => {
		e.preventDefault();
		const formData = {};
		for (let formElementId in this.state.controls) {
			formData[formElementId] = this.state.controls[formElementId].value;
		}
	};

	render() {
		const formElements = Object.keys(this.state.controls).map(key => {
			return {
				id: key,
				config: this.state.controls[key]
			};
		});
		return (
			<main className={classes.Page}>
				<section className={classes.Container}>
					<AuthLeft
						authType="Vendor Login"
						text="By logging in you agree to the ridiculously long terms that you
                didn't bother to read"
					/>
					<article className={classes.Right}>
						<AuthForm
							inputChangeHandler={this.inputChangeHandler}
							formElements={formElements}
							submit={this.handleVendorLogin}
							type="login"
						/>
					</article>
				</section>
			</main>
		);
	}
}

export default VendorLogin;
