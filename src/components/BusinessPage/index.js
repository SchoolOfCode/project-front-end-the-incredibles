import { useState } from "react";
import mockData from "../../libs/mockData";
import BusinessPageEdit from "./BusinessPageEdit";
import BusinessPageStatic from "./BusinessPageStatic";
import useGet from "../../hooks/useGet";

function BusinessPage() {
  const [canEdit, setCanEdit] = useState(true);
  const [businessInfo, setBusinessInfo] = useGet();

  function toggleCanEdit() {
    setCanEdit(!canEdit);
    console.log(canEdit);
  }

  return (
    <div className={BusinessPage}>
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
