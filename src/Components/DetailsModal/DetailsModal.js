import React from "react";
import "./DetailsModal.css"
import ReactDOM from "react-dom"
import { IoClose } from "react-icons/io5";


function DetailsModal({ closeDetails, children }) {

    return ReactDOM.createPortal(
        <div className="Modal-ctrl active">
            <div className="detailTableModal-ctrl">
                <button onClick={closeDetails} className="detailTableModal-btn"><IoClose></IoClose></button>

                {children}
            </div>

        </div>, document.getElementById("modals-parent")
    )
}

export default DetailsModal