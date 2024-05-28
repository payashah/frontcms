import React, { useEffect, useState } from "react";
import "./Comments.css"
import ErrorBox from "../ErrorBox/ErrorBox";
import DetailsModal from "../DetailsModal/DetailsModal";

function Comments() {

    const [allComments, setAllComments] = useState([])
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [mainDetailsComment, setMainDetailsComment] = useState("")


    useEffect(() => {
        fetch("http://localhost:8000/api/comments/")
            .then(res => res.json())
            .then(comments => setAllComments(comments))
    }, [])

    const closeDetailsComment = () => {
        setIsShowDetailsModal(false)
    }

    return (
        <div className="comment-ctrl">
            {allComments.length ? (
                <table className="comment-table">
                    <thead>
                        <tr className="comment-table-tr">
                            <th className="comment-table-tr-th">اسم کاربر</th>
                            <th className="comment-table-tr-th">نام محصول</th>
                            <th className="comment-table-tr-th">متن</th>
                            <th className="comment-table-tr-th">تاریخ</th>
                            <th className="comment-table-tr-th">ساعت</th>
                            <th className="comment-table-tr-th"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allComments.map((comment) => (
                            <tr key={comment.id} className="comment-table-tr">
                                <td className="comment-table-tr-td">{comment.userID}</td>
                                <td className="comment-table-tr-td">{comment.productID}</td>
                                <td className="comment-table-tr-td">
                                    <button onClick={() => {
                                        setIsShowDetailsModal(true)
                                        setMainDetailsComment(comment.body)
                                    }} className="comment-table-tr-td-btnShowComment">مشاهده</button>
                                </td>
                                <td className="comment-table-tr-td">{comment.date}</td>
                                <td className="comment-table-tr-td">{comment.hour}</td>
                                <td className="comment-table-tr-td">
                                    <div className="comment-table-tr-td-btns">
                                        <button className="comment-table-tr-td-btns-item">تایید</button>
                                        <button className="comment-table-tr-td-btns-item">ویرایش</button>
                                        <button className="comment-table-tr-td-btns-item">پاسخ</button>
                                        <button className="comment-table-tr-td-btns-item delete">حذف</button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            ) : (
                <ErrorBox msg={"هیچ کامنتی یافت نشد"}></ErrorBox>

            )}
            {isShowDetailsModal && (
                <DetailsModal className="detailTableModal-ctrl" closeDetails={closeDetailsComment}>
                    <p className="comment-text">{mainDetailsComment}</p>
                </DetailsModal>
            )}
        </div>
    )
}
export default Comments