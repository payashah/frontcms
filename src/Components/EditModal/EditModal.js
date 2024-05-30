import "./EditModal.css"
import React from "react"
import { IoClose } from "react-icons/io5";



function EditModal({ closeAction, onSubmitAction, children }) {

    return (
        <div className="Modal-ctrl active">
            <div className="editModal">
                <button className="editModal-close" onClick={closeAction}><IoClose></IoClose></button>
                <h1 className="editModal-title">اطلاعات محصول جدید را وارد نمایید</h1>

                {children}

                <button onClick={onSubmitAction} className="editModal-btn"> ثبت اطلاعات جدید</button>
            </div>
        </div>
    )
}
export default EditModal