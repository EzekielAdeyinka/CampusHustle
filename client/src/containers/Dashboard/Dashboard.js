import React from "react";
import Footer from "../../components/Footer/Footer";
import Overlay from "../../components/UI/Overlay/Overlay";
import Header from "../../components/Header/Header";
import Division from "../../components/UI/Division/Division";
import edit from "../../assets/img/edit.svg";
import ezekiel from "../../assets/img/ezekiel.jpg";
import VendorProfileCard from "../../components/VendorProfileCard/VendorProfileCard";
import Input from "../../components/UI/Input/Input";
import { updateObject, checkValidity } from "../../shared/utility";

class Dashboard extends React.Component {
	state = {
		vendor: {
			firstName: "Ezekiel ",
			lastName: "Adeyinka",
			servce: "Software Development",
			campus: "OAU",
			experience: 3,
			phone: "08175410053",
			bio:
				"I build world class Software solutions that scales. I'm available for any job.",
			imgUrl: ezekiel
		},
		controls: {
			name: {
				elementType: "input",
				elementConfig: {
					type: "text",
					name: "name",
					placeholder: "Your Name"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			service: {
				elementType: "input",
				elementConfig: {
					type: "text",
					name: "service",
					placeholder: "Service You Render"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			campus: {
				elementType: "input",
				elementConfig: {
					type: "text",
					name: "campus",
					placeholder: "Your Campus"
				},
				value: "",
				validation: {
					required: true
				},
				valid: false,
				touched: false
			},
			experience: {
				elementType: "input",
				elementConfig: {
					type: "number",
					name: "experience",
					placeholder: "Years of Experience"
				},
				value: "",
				validation: {
					minLength: 0,
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
					placeholder: "Your Phone Number"
				},
				value: "",
				validation: {
					required: true,
					isNumeric: true
				},
				valid: false,
				touched: false
			},
			bio: {
				elementType: "textarea",
				elementConfig: {
					name: "bio",
					cols: 30,
					rows: 10
				},
				value: "Bio",
				validation: {
					required: true
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

	handleProfileUpdate = e => {
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
			<React.Fragment>
				<Overlay />
				<Header />
				<main>
					<section className="Page_section Profile">
						<VendorProfileCard dashboard vendor={this.state.vendor} />
					</section>
					<Division />
					<section className="Page_section Update_profile">
						<h3>Edit Profile</h3>
						<div className="Container">
							<form
								action="#"
								method="post"
								onSubmit={this.handleProfileUpdate}
							>
								{formElements.map(formElement => (
									<Input
										key={formElement.id}
										elementType={formElement.config.elementType}
										elementConfig={formElement.config.elementConfig}
										value={formElement.config.value}
										invalid={!formElement.config.valid}
										touched={formElement.config.touched}
										shouldValidate={formElement.config.validation}
										changed={e => this.inputChangeHandler(e, formElement.id)}
									/>
								))}
								<button type="submit">Update</button>
							</form>
							<div className="Aside_svg">
								<img src={edit} alt="Editable Svg" />
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Dashboard;
