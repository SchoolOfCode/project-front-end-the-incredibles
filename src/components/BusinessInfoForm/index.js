import Input from "../Inputs/Input";
import Blob from "../Blob/src/Blob"
;

import { businessInfoForm } from "./BusinessInfoForm.module.css";

function BusinessInfoForm({updateData, businessInfo}) {
    const {businessName, primaryEmail} = businessInfo;

    return (
        <form className={businessInfoForm}>
        <Input
          type="text"
          labelText="Business Name:"
          id="businessName"
          updateInfo={updateData}
          currentInfo={businessName}
        />
        <Input
          type="text"
          labelText="Email:"
          id="primaryEmail"
          updateInfo={updateData}
          currentInfo={primaryEmail}
        />
        <Blob updateInfo={updateData} updateField="businessImage"/>
      </form>
    )
}

export default BusinessInfoForm;
