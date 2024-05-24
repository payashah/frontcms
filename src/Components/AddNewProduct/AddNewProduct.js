import React, { useState } from "react";
import "./AddNewProduct.css"

function AddNewProduct() {

    const [newProductTitle, setNewProductTitle] = useState("")
    const [newProductImg, setNewProductImg] = useState("")
    const [newProductPrice, setNewProductPrice] = useState("")
    const [newProductCount, setNewProductCount] = useState("")
    const [newProductColors, setNewProductColors] = useState("")



    return (
        <div className="addNewProduct">
            <h1 className="addNewProduct-title">افزودن محصول جدید :</h1>
            <div className="addNewProduct-inputs">
                <input className="addNewProduct-inputs-item" placeholder="نام محصول ..." type="text"
                    value={newProductTitle} onChange={(event) => setNewProductTitle(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="عکس محصول ..." type="text"
                    value={newProductImg} onChange={(event) => setNewProductImg(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="قیمت محصول ..." type="text"
                    value={newProductPrice} onChange={(event) => setNewProductPrice(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="موجودی محصول ..." type="text"
                    value={newProductCount} onChange={(event) => setNewProductCount(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="رنگبندی محصول ..." type="text"
                    value={newProductColors} onChange={(event) => setNewProductColors(event.target.value)}
                />
                <div className="addNewProduct-inputs-btn">
                    <button className="addNewProduct-inputs-btn-record"
                    > ثبت محصول</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewProduct