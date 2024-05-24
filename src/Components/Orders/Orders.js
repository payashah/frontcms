import React from "react";
import "./Orders.css"
import ErrorBox from "../ErrorBox/ErrorBox";

function Orders() {

    return (
        <div className="orders-ctrl">
            <ErrorBox msg={"هیچ سفارشی یافت نشد"}></ErrorBox>
        </div>
    )
}
export default Orders