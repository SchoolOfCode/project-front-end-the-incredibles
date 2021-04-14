import Button from "../Buttons/Button";
import IsBusinessOpen from "../IsBusinessOpen";
import {
  businessAbout,
  businessImg,
  businessName,
  container,
  contentContainer,
} from "./BusinessProfile.module.css";

function BusinessProfile({ businessInfo, editButton }) {

  return (
    <>
      {businessInfo && (
        <div className={container}>
          <IsBusinessOpen IsTrading={businessInfo.isTrading} />
          <>
            {editButton && (
              <Button
                className="editBusinessPage"
                textContent={
                  <span>
                    Edit<i className="fas fa-edit"></i>
                  </span>
                }
                onClick={editButton.onClick}
              />
            )}
          </>
          <div className={contentContainer}>
            <h2 className={businessName}>{businessInfo.businessName}</h2>
            <p className={businessAbout}>{businessInfo.primaryEmail}</p>
            <img
              className={businessImg}
              src={businessInfo.businessLogo}
              alt="BusinessLogo"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default BusinessProfile;
