import { logoContainer } from "./Logo.module.css";
import logo from "./logoForApp.png";

function Logo() {
  return (
    <img
      src={logo}
      alt="our logo, cart with name cartshop"
      className={logoContainer}
    />
  );
}

export default Logo;
