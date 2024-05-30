import "./ProducsTable.css"
import React, { useEffect, useState } from "react"
import DeleteModal from "../DeleteModal/DeleteModal"
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { BsFillCloudUploadFill } from "react-icons/bs";


function ProducsTable({ allProducts, getAllProducts }) {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [productID, setProductID] = useState(null)
    const [mainProductInfos, setMainProductInfos] = useState({})
    const [productNewTitle, setProductNewTitle] = useState("")
    const [productNewImg, setProductNewImg] = useState("")
    const [productNewPrice, setProductNewPrice] = useState("")
    const [productNewCount, setProductNewCount] = useState("")
    const [productNewPopularity, setProductNewPopularity] = useState("")
    const [productNewColors, setProductNewColors] = useState("")
    const [productNewSale, setProductNewSale] = useState("")




    const acceptDeleteModal = () => {
        console.log('productID ->', productID)

        fetch(`http://localhost:8000/api/products/${productID}`, {
            method: "DELETE"
        })
            .then(res => {
                console.log('res ->', res)
                return res.json()
            })
            .then(result => {
                console.log(result)
                setIsShowDeleteModal(false)
                getAllProducts()
            })

    }
    const rejectDeleteModal = () => {
        setIsShowDeleteModal(false)
    }
    const closeDetailsModal = () => {
        setIsShowDetailsModal(false)
    }
    const closeEditsModal = () => {
        setIsShowEditModal(false)
    }

    const updateData = (event) => {
        event.preventDefault()

        const productNewInfos = {
            title: productNewTitle,
            img: productNewImg,
            price: productNewPrice,
            count: productNewCount,
            colors: productNewColors,
            sale: productNewSale,
            popularity: productNewPopularity
        }

        fetch(` http://localhost:8000/api/products/${productID}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(productNewInfos)
        })
            .then(res => res.json())
            .then(result => {
                getAllProducts()
                setIsShowEditModal(false)
            })


    }

    return (
        <>
            <div className="producsTable-ctrl">
                <table className="producsTable">
                    <thead>
                        <tr className="producsTable-tr">
                            <th className="producsTable-tr-th">عکس محصول</th>
                            <th className="producsTable-tr-th">نام محصول</th>
                            <th className="producsTable-tr-th">قیمت محصول</th>
                            <th className="producsTable-tr-th">موجودی محصول</th>
                            <th className="producsTable-tr-th"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allProducts.map((product) => (
                            <tr className="producsTable-tr">
                                <td className="producsTable-tr-td">
                                    <img className="producsTable-tr-td-img" src={product.img} alt="pic" />
                                </td>
                                <td className="producsTable-tr-td"> {product.title}</td>
                                <td className="producsTable-tr-td"> {product.price}</td>
                                <td className="producsTable-tr-td"> {product.count}</td>
                                <td className="producsTable-tr-td">
                                    <div className="producsTable-btns">

                                        <button onClick={() => {
                                            setIsShowDetailsModal(true)
                                            setMainProductInfos(product)
                                        }} className="producsTable-btns-btn">جزئیات</button>

                                        <button onClick={() => {
                                            setIsShowEditModal(true)
                                            setProductID(product.id)
                                            setProductNewTitle(product.title)
                                            setProductNewImg(product.img)
                                            setProductNewPrice(product.price)
                                            setProductNewCount(product.count)
                                            setProductNewColors(product.colors)
                                            setProductNewSale(product.sale)
                                            setProductNewPopularity(product.popularity)
                                        }} className="producsTable-btns-btn">ویرایش</button>

                                        <button onClick={() => (
                                            setIsShowDeleteModal(true),
                                            setProductID(product.id)
                                        )} className="producsTable-btns-btn delete">حذف</button>

                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
                {isShowDeleteModal && (
                    <DeleteModal
                        title="آیا از حذف محصول اطمینان دارید ؟" acceptDelete={acceptDeleteModal} rejectDelete={rejectDeleteModal}
                    ></DeleteModal>
                )
                }

                {isShowDetailsModal &&
                    <DetailsModal closeAction={closeDetailsModal}>

                        <table className="detailTableModal">

                            <thead>
                                <tr className="detailTableModal-tr">
                                    <th className="detailTableModal-tr-head">محبوبیت</th>
                                    <th className="detailTableModal-tr-head">رنگبندی</th>
                                    <th className="detailTableModal-tr-head">نام</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="detailTableModal-tr">
                                    <td className="detailTableModal-tr-data">{mainProductInfos.popularity}</td>
                                    <td className="detailTableModal-tr-data">{mainProductInfos.colors}</td>
                                    <td className="detailTableModal-tr-data">{mainProductInfos.title}</td>
                                </tr>
                            </tbody>
                        </table>
                    </DetailsModal>}

                {isShowEditModal && <EditModal onSubmitAction={updateData} closeAction={closeEditsModal}>

                    <>
                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="نام محصول"
                                value={productNewTitle}
                                onChange={(event) => setProductNewTitle(event.target.value)}
                            />
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="قیمت محصول"
                                value={productNewPrice}
                                onChange={(event) => setProductNewPrice(event.target.value)}
                            />
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="موجودی محصول"
                                value={productNewCount}
                                onChange={(event) => setProductNewCount(event.target.value)}
                            />
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="عکس محصول"
                                value={productNewImg}
                                onChange={(event) => setProductNewImg(event.target.value)}
                            />
                            <BsFillCloudUploadFill className="editModal-input-icon"></BsFillCloudUploadFill>
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="محبوبیت محصول"
                                value={productNewPopularity}
                                onChange={(event) => setProductNewPopularity(event.target.value)}
                            />
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="فروش محصول"
                                value={productNewSale}
                                onChange={(event) => setProductNewSale(event.target.value)}
                            />
                        </div>

                        <div className="editModal-input">
                            <input type="text" className="editModal-input-data" placeholder="رنگبندی محصول"
                                value={productNewColors}
                                onChange={(event) => setProductNewColors(event.target.value)}
                            />
                        </div>

                    </>
                </EditModal>}

            </div>
        </>
    )
}
export default ProducsTable