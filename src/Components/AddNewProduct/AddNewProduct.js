import React, { useState } from "react";
import "./AddNewProduct.css"

function AddNewProduct({ getAllProducts }) {

    const [newProductTitle, setNewProductTitle] = useState("")
    const [newProductImg, setNewProductImg] = useState("")
    const [newProductPrice, setNewProductPrice] = useState("")
    const [newProductPopularity, setNewProductPopularity] = useState("")
    const [newProductSale, setNewProductSale] = useState("")
    const [newProductCount, setNewProductCount] = useState("")
    const [newProductColors, setNewProductColors] = useState("")

    const newProductInfos = {
        title: newProductTitle,
        img: newProductImg,
        price: newProductPrice,
        popularity: newProductPopularity,
        sale: newProductSale,
        count: newProductCount,
        colors: newProductColors

    }

    const addNewProduct = ((event) => {
        event.preventDefault()

        console.log(newProductInfos);

        fetch("http://localhost:8000/api/products/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProductInfos)
        })
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(result =>
                getAllProducts(),
                empetyinput()

            )
    })

    function empetyinput() {
        setNewProductTitle("")
        setNewProductImg("")
        setNewProductPrice("")
        setNewProductPopularity("")
        setNewProductSale("")
        setNewProductCount("")
        setNewProductColors("")
    }


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
                <input className="addNewProduct-inputs-item" placeholder="محبوبیت محصول ..." type="text"
                    value={newProductPopularity} onChange={(event) => setNewProductPopularity(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="فروش محصول ..." type="text"
                    value={newProductSale} onChange={(event) => setNewProductSale(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="موجودی محصول ..." type="text"
                    value={newProductCount} onChange={(event) => setNewProductCount(event.target.value)}
                />
                <input className="addNewProduct-inputs-item" placeholder="رنگبندی محصول ..." type="text"
                    value={newProductColors} onChange={(event) => setNewProductColors(event.target.value)}
                />

                <div className="addNewProduct-inputs-btn">
                    <button className="addNewProduct-inputs-btn-record" onClick={addNewProduct}> ثبت محصول</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewProduct