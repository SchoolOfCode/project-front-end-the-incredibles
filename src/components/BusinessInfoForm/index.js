
import Input from "../Inputs/Input";

import {businessInfoForm} from "./BusinessInfoForm.module.css";

function BusinessInfoForm({updateData, businessInfo}) {
    const {businessName, businessAbout} = businessInfo;

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
          labelText="About The Business:"
          id="businessAbout"
          updateInfo={updateData}
          currentInfo={businessAbout}
        />
      </form>
    )
}

export default BusinessInfoForm
