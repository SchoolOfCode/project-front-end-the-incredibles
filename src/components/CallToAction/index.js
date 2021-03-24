import React from 'react';
import CallToSignUp from "../CallToSignUp";

import {callToAction, heading, subheading } from "./CallToAction.module.css";

function CallToAction() {
    return (
        <div className={callToAction}>
            <h1 className={heading}>Support for your Local Business</h1>
            <p className={subheading}>We believe in your business as much as you do.</p>
            <CallToSignUp />
        </div>
    )
}

export default CallToAction
