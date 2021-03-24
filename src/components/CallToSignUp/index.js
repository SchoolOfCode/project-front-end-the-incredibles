import React from 'react';
import { callToSignUp } from './CallToSignUp.module.css';
import SignInUpButton from "../Buttons/SignInUpButton"
function CallToSignUp() {
	return (
		<div className={callToSignUp}>
			<SignInUpButton textContent="sign in"/>
			<SignInUpButton textContent="sign up"/>
		</div>
	);
}

export default CallToSignUp;
