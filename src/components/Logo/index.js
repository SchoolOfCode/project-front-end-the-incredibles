import {logo, icon, heading} from "./Logo.module.css"

function Logo() {
    return (
        <div className={logo}>
            <i className={icon} class="fas fa-shopping-cart"> </i>
            <h1 className={heading}>CartShop</h1>
        </div>
    )
}

export default Logo
