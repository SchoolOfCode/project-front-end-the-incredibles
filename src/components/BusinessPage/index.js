import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useGet from "../../hooks/useGet";
import BusinessPageEdit from "./BusinessPageEdit";
import BusinessPageStatic from "./BusinessPageStatic";
import ShopLink from "../ShopLink";
function BusinessPage() {
  const { user } = useAuth0();
  const [canEdit, setCanEdit] = useState(true);

  const { isLoading, data: businessInfo, setData: setBusinessInfo } = useGet(
    user.sub,
    canEdit
  );
  function toggleCanEdit() {
    setCanEdit(!canEdit);
  }

  // const [ businessInfo, setBusinessInfo ] = useGet(user.sub);
  console.log(businessInfo);

  // useGet("auth0|606198aac96e2800685cabff");
  // const [businessInfo, setBusinessInfo] = useState(mockData);

  console.log(`This is the users Auth0 ID: ${user.sub}`);
  //use this id to get access to DB.
  //
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    businessInfo && (
      <div className={BusinessPage}>
        <ShopLink businessName={businessInfo.businessName} />
        {canEdit ? (
          <BusinessPageEdit
            businessInfo={businessInfo}
            toggleCanEdit={toggleCanEdit}
            setBusinessInfo={setBusinessInfo}
          />
        ) : (
          <BusinessPageStatic
            businessInfo={businessInfo}
            toggleCanEdit={toggleCanEdit}
          />
        )}
      </div>
    )
  );
}
export default BusinessPage;
