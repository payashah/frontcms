import React from "react";
import "./Product.css"
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProducsTable from "../ProductsTable/ProducsTable";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useEffect, useState } from "react";

function Product() {

    const [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = () => {
        fetch("http://localhost:8000/api/products/")
            .then(res => res.json())
            .then(products => {
                console.log(products)
                setAllProducts(products)
            })
    }

    return (
        <div className="product-ctrl">
            {/* <ErrorBox msg={"هیچ محصولی یافت نشد"}></ErrorBox> */}
            <AddNewProduct getAllProducts={getAllProducts}></AddNewProduct>
            <ProducsTable allProducts={allProducts} getAllProducts={getAllProducts}></ProducsTable>
        </div>
    )
}
export default Product