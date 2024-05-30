import React from "react";
import "./DetailsModal.css"
import ReactDOM from "react-dom"
import { IoClose } from "react-icons/io5";


function DetailsModal({ closeAction, children }) {

    return (
        <div className="Modal-ctrl active">
            <div className="detailTableModal-ctrl">
                <button onClick={closeAction} className="detailTableModal-btn"><IoClose></IoClose></button>

                {children}
            </div>

        </div>
    )
}

export default DetailsModal