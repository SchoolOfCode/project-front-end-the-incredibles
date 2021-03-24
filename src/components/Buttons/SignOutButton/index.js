import Button from "../Button"

function SignOutButton() {
	return (
		<Button className="signOut" textContent="Sign Out" onClick={console.log("sign Out")}/>
	);
}

export default SignOutButton;
