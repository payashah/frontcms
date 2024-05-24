import React from "react";
import "./Header.css"
import { IoIosNotifications } from "react-icons/io";
import { TbBrightnessUpFilled } from "react-icons/tb";




function Header() {

    return (
        <div className="header-ctrl">
            <div className="header-right">
                <img className="header-right-img" src="./pic/user1.jpg" alt="admin-pic" />
                <div className="header-right-info">
                    <h1 className="header-right-info-name">پایا شاه ملکی</h1>
                    <h2 className="header-right-info-job">برنامه نویس فرانت اند</h2>
                </div>
            </div>
            <div className="header-left">
                <div className="input-box">
                    <input className="header-left-input" type="text" placeholder="جستجو کنید ..." />
                    <button className="header-left-input-btn"> جستجو</button>
                </div>

                <IoIosNotifications className="header-left-notif"></IoIosNotifications>
                <TbBrightnessUpFilled className="header-left-brightness"></TbBrightnessUpFilled>
            </div>
        </div>
    )
}
export default Header