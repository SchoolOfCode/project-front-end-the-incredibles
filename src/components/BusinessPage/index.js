import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import useGet from "../../hooks/useGet";
import BusinessPageEdit from "./BusinessPageEdit";
import BusinessPageStatic from "./BusinessPageStatic";
import ShopLink from "../ShopLink";
import { Spinner } from "@chakra-ui/react";
import "../../index.css";

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

  //use this id to get access to DB.
  //
  if (isLoading) {
    return (
      <div className={"loading"}>
        <Spinner color="#FF5A5F" size="xl" />
      </div>
    );
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
