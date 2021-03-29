import Button from "../Button";
import { useAuth0 } from "@auth0/auth0-react";

function SignOutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      classNames="signOut"
      textContent="Sign Out"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
}

export default SignOutButton;
