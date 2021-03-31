import Input from "../Inputs/Input";
import Blob from "../Blob/src/Blob"
;

import { businessInfoForm } from "./BusinessInfoForm.module.css";
import { useState } from 'react';

function BusinessInfoForm({updateData, businessInfo}) {
    const {businessName, primaryEmail} = businessInfo;

    const updateBlob = (blob) => {
      updateData(blob, "businessLogo")
    }

    return (
        <form className={businessInfoForm}>
        <Input
          type="text"
          labelText="Business Name:"
          id="businessName"
          updateInfo={(e) => updateData(e.target.value, "businessName")}
          currentInfo={businessName}
        />
        <Input
          type="text"
          labelText="Email:"
          id="primaryEmail"
          updateInfo={(e) => updateData(e.target.value, "primaryEmail")}
          currentInfo={primaryEmail}
        />
        <Blob updateInfo={updateBlob} currentImage={businessInfo.businessLogo}
        />
      </form>
    )
}

export default BusinessInfoForm;
