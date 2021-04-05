import { logoContainer } from "./Logo.module.css";
import logo from "./logoForApp.png";

function Logo() {
  return (
    // <div className={logo}>
    //   <i className={icon} class="fas fa-shopping-cart">
    //     {" "}
    //   </i>
    //   <h1 className={heading}>CartShop</h1>
    // </div>
    <img
      src={logo}
      alt="our logo, cart with name cartshop"
      className={logoContainer}
    />
  );
}

export default Logo;
