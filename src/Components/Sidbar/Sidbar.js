import { Link } from "react-router-dom"
import "./Sidbar.css"
import React from "react"
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";






function Sidbar() {

    return (
        <div className="sidbar-ctrl">
            <div className="sidbar">
                <h1 className="sidbar-title">به داشبورد {" پایا "} خوش آمدید </h1>
                <ul className="sidbar-links">
                    <Link to="/" className="sidbar-links-li "><IoHome className="sidbar-links-li-icon" ></IoHome> صفحه اصلی :</Link>
                    <Link to="/product" className="sidbar-links-li "><MdProductionQuantityLimits className="sidbar-links-li-icon"></MdProductionQuantityLimits> محصولات : </Link>
                    <Link to="/comments" className="sidbar-links-li "><FaCommentAlt className="sidbar-links-li-icon"></FaCommentAlt> کامنت ها :</Link>
                    <Link to="/users" className="sidbar-links-li "><HiUsers className="sidbar-links-li-icon"></HiUsers > کاربران :</Link>
                    <Link to="/orders" className="sidbar-links-li "><IoBagCheckOutline className="sidbar-links-li-icon"></IoBagCheckOutline> سفارشات :</Link>
                    <Link to="/offs" className="sidbar-links-li "><BsCurrencyDollar className="sidbar-links-li-icon"></BsCurrencyDollar> تخفیف ها :</Link>

                </ul>

            </div>
        </div>
    )
}

export default Sidbar