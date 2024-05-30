import React, { useEffect, useState } from "react";
import "./Users.css"
import ErrorBox from "../ErrorBox/ErrorBox";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";


function Users() {

    const [users, setUsers] = useState([])
    const [isShowDeleteUserModal, setIsShowDeleteUserModal] = useState(false)
    const [userID, setUserID] = useState(null)
    const [isShowDetailsUserModal, setIsShowDetailsUserModal] = useState(false)
    const [mainUserInfos, setMainUserInfos] = useState("")

    useEffect(() => {
        getAllUsers()
    }, [])

    function getAllUsers() {
        fetch("http://localhost:8000/api/users")
            .then(res => res.json())
            .then(users => { setUsers(users) })
    }

    const acceptDeleteUserModal = () => {

        fetch(`http://localhost:8000/api/users/${userID}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                setIsShowDeleteUserModal(false)
                getAllUsers()

            })

    }
    const closeDeleteUserModal = () => {
        setIsShowDeleteUserModal(false)
    }

    const closeDetailsUserModal = () => {
        setIsShowDetailsUserModal(false)
    }

    return (
        <div className="users-ctrl">
            <div>
                {users.length ? (
                    <>
                        <h1 className="users-title">لیست مشتریان</h1>
                        <table className="users-table">
                            <thead>
                                <tr className="users-table-tr">
                                    <th className="users-table-tr-th">نام</th>
                                    <th className="users-table-tr-th">نام خانوادگی</th>
                                    <th className="users-table-tr-th">Username</th>
                                    <th className="users-table-tr-th">Password</th>
                                    <th className="users-table-tr-th">شماره تماس</th>
                                    <th className="users-table-tr-th"> ایمیل</th>
                                    <th className="users-table-tr-th"> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr className="users-table-tr">
                                        <td className="users-table-tr-td">{user.firsname}</td>
                                        <td className="users-table-tr-td">{user.lastname}</td>
                                        <td className="users-table-tr-td">{user.username}</td>
                                        <td className="users-table-tr-td">{user.password}</td>
                                        <td className="users-table-tr-td">{user.phone}</td>
                                        <td className="users-table-tr-td">{user.email}</td>
                                        <td className="users-table-tr-td">
                                            <div className="users-table-tr-td-btns">
                                                <button className="users-table-tr-td-btns-btn"
                                                    onClick={() => {
                                                        setIsShowDetailsUserModal(true)
                                                        setMainUserInfos(user)
                                                    }}
                                                >جزئیات</button>

                                                <button className="users-table-tr-td-btns-btn">ویرایش</button>

                                                <button className="users-table-tr-td-btns-btn delete"
                                                    onClick={() => {
                                                        setIsShowDeleteUserModal(true)
                                                        setUserID(user.id)

                                                    }}
                                                >حذف</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                        {isShowDeleteUserModal &&
                            <DeleteModal
                                title="آیا از حذف کاربر اطمینان دارید ؟"
                                acceptAction={acceptDeleteUserModal}
                                rejectAction={closeDeleteUserModal}
                            >

                            </DeleteModal>
                        }
                        {
                            isShowDetailsUserModal &&
                            <DetailsModal
                                closeAction={closeDetailsUserModal}
                            >
                                <table className="detailTableModal">

                                    <thead>
                                        <tr className="detailTableModal-tr">
                                            <th className="detailTableModal-tr-head">شهر</th>
                                            <th className="detailTableModal-tr-head">آدرس</th>
                                            <th className="detailTableModal-tr-head">امتیاز</th>
                                            <th className="detailTableModal-tr-head">میزان خرید</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="detailTableModal-tr">
                                            <td className="detailTableModal-tr-data">{mainUserInfos.city}</td>
                                            <td className="detailTableModal-tr-data">{mainUserInfos.address}</td>
                                            <td className="detailTableModal-tr-data">{mainUserInfos.score}</td>
                                            <td className="detailTableModal-tr-data">{mainUserInfos.buy}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </DetailsModal>

                        }
                    </>

                ) : (<ErrorBox msg={"هیچ کاربری یافت نشد"}></ErrorBox>)}
            </div>
        </div>
    )
}
export default Users

