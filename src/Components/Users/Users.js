import React from "react";
import "./Users.css"
import ErrorBox from "../ErrorBox/ErrorBox";

function Users() {

    return (
        <div className="users-ctrl">
            <div>
                <ErrorBox msg={"هیچ کاربری یافت نشد"}></ErrorBox>
            </div>
        </div>
    )
}
export default Users