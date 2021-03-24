import Button from "../Button"

function SignInButton() {
	return (
		<Button className="signIn" textContent="Sign In" onClick={console.log("sign in")}/>
	);
}

export default SignInButton;
