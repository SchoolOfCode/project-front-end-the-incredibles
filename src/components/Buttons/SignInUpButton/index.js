import { useAuth0 } from '@auth0/auth0-react';
import Button from '../Button';

function SignInUpButton({ textContent }) {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			classNames='signInUp'
			textContent={textContent}
			onClick={loginWithRedirect}
		/>
	);
}

export default SignInUpButton;
