import React from "react";
import "./DeleteModal.css"
import ReacrDOM from "react-dom"

function DeleteModal({ acceptAction, rejectAction, title }) {

    return ReacrDOM.createPortal(
        <div className="Modal-ctrl active ">
            <div className="deleteModal">
                <h1 className="deleteModal-title">{title}</h1>
                <div className="deleteModal-btns">
                    <button onClick={rejectAction} className="deleteModal-btns-no">خیر</button>
                    <button onClick={acceptAction} className="deleteModal-btns-yes">بله</button>

                </div>
            </div>
        </div>, document.getElementById("modals-parent")
    )
}
export default DeleteModal