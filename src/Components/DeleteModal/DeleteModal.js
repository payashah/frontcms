import React from "react";
import "./DeleteModal.css"
import ReacrDOM from "react-dom"

function DeleteModal({ acceptDelete, rejectDelete }) {

    return ReacrDOM.createPortal(
        <div className="Modal-ctrl active ">
            <div className="deleteModal">
                <h1 className="deleteModal-title">آیا از حذف اطمینان دارید ؟</h1>
                <div className="deleteModal-btns">
                    <button onClick={rejectDelete} className="deleteModal-btns-no">خیر</button>
                    <button onClick={acceptDelete} className="deleteModal-btns-yes">بله</button>

                </div>
            </div>
        </div>, document.getElementById("modals-parent")
    )
}
export default DeleteModal