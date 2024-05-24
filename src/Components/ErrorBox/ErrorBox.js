import React from "react";
import "./ErrorBox.css"

function ErrorBox({ msg }) {

    return (
        <div className="errorBox">{msg}</div>
    )
}

export default ErrorBox