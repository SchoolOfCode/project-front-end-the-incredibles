import IsBusinessOpen from "../IsBusinessOpen";
import {
  businessAbout,
  businessImg,
  businessName,
  container,
  contentContainer,
} from "./BusinessProfile.module.css";
function BusinessProfile({ name, about, img, isTrading }) {
  return (
    <div className={container}>
      <IsBusinessOpen isTrading={isTrading} />
      <div className={contentContainer}>
        <h2 className={businessName}>{name}</h2>
        <p className={businessAbout}>{about}</p>

        <img className={businessImg} src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}

export default BusinessProfile;
