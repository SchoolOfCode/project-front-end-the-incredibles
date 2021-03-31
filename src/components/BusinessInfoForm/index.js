import Input from "../Inputs/Input";
import Blob from "../Blob/src/Blob"
;

import { businessInfoForm } from "./BusinessInfoForm.module.css";
import { useState } from 'react';

function BusinessInfoForm({updateData, businessInfo}) {
    const {businessName, primaryEmail} = businessInfo;

  console.log(businessInfo)
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
        <Blob updateInfo={updateData} updateField="businessLogo" currentImage={businessInfo.businessLogo}
        />
      </form>
    )
}

export default BusinessInfoForm;
