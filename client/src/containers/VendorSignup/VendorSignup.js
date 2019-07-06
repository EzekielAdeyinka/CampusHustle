import React from "react";
import classes from "../../components/Auth/Auth.module.css";
import AuthLeft from "../../components/Auth/AuthLeft/AuthLeft";
import { updateObject, checkValidity } from "../../shared/utility";
import AuthForm from "../../components/Auth/AuthForm/AuthForm";

class VendorSignup extends React.Component {
	state = {
		controls: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					name: "name",
					id: "name"
				},
				label: {
					text: "Name"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			phone: {
				elementType: "input",
				elementConfig: {
					type: "tel",
					name: "phone",
					id: "phone"
				},
				label: {
					text: "Phone Number"
				},
				value: "",
				validation: {
					required: true,
					isNumeric: true
				},
				valid: false,
				touched: false
			},
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
			service: {
				elementType: "input",
				elementConfig: {
					type: "text",
					name: "service",
					id: "service"
				},
				label: {
					text: "Service You Render"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			campus: {
				elementType: "select",
				elementConfig: {
					options: [
						{ value: "", displayValue: "Select Campus" },
						{ value: "1", displayValue: "Unilag" },
						{ value: "2", displayValue: "OAU" }
					],
					id: "campus",
					name: "campus"
				},
				label: {
					text: "Your Campus"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false
			},
			experience: {
				elementType: "input",
				elementConfig: {
					type: "number",
					name: "experience",
					id: "experience"
				},
				label: {
					text: "Years of Experience"
				},
				value: "",
				validation: {
					minLength: 0,
					required: true
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

	handleVendorRegister = e => {
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
						authType="Vendor Sign Up"
						text="By logging in you agree to the ridiculously long terms that you
                didn't bother to read"
					/>
					<article className={classes.Right}>
						<AuthForm
							inputChangeHandler={this.inputChangeHandler}
							formElements={formElements}
							submit={this.handleVendorRegister}
							type="register"
						/>
					</article>
				</section>
			</main>
		);
	}
}

export default VendorSignup;
