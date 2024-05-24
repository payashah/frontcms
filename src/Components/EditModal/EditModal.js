import "./EditModal.css"
import React from "react"
import { IoClose } from "react-icons/io5";
import { BsFillCloudUploadFill } from "react-icons/bs";



function EditModal({ closeEdit, onSubmit, children }) {

    return (
        <div className="Modal-ctrl active">
            <div className="editModal">
                <button className="editModal-close" onClick={closeEdit}><IoClose></IoClose></button>
                <h1 className="editModal-title">اطلاعات محصول جدید را وارد نمایید</h1>

                {children}

                <button onClick={onSubmit} className="editModal-btn"> ثبت اطلاعات جدید</button>
            </div>
        </div>
    )
}
export default EditModal