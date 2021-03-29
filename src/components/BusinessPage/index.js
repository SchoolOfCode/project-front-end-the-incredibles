import { useState } from "react";
import {useAuth0} from "@auth0/auth0-react"
import mockData from "../../libs/mockData";
import BusinessPageEdit from "./BusinessPageEdit";
import BusinessPageStatic from "./BusinessPageStatic";
import useGet from "../../hooks/useGet";



function BusinessPage() {
  const [canEdit, setCanEdit] = useState(true);
  const [businessInfo, setBusinessInfo] = useGet();
  // const [businessInfo, setBusinessInfo] = useState(mockData);
    const { user } = useAuth0();

    console.log(user.sub);
    //use this id to get access to DB.
  const {businessName} = businessInfo
    //
  function toggleCanEdit() {
    setCanEdit(!canEdit);
    console.log(canEdit);
  }

  return (
    <div className={BusinessPage}>
      <p>your custom url is: `https://localhost:3000/stores/{businessName.replace(" ", "-")}`</p>
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
  );
}

export default BusinessPage;
