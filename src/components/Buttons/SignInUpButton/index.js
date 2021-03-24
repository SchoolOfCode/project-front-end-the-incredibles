import Button from "../Button"

function SignInUpButton({textContent}) {
	return (
		<Button className="signInUp" textContent={textContent} onClick={console.log("sign in")}/>
	);
}

export default SignInUpButton;
