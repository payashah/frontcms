import React from "react";
import "./Product.css"
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProducsTable from "../ProductsTable/ProducsTable";
import DeleteModal from "../DeleteModal/DeleteModal";

function Product() {

    return (
        <div className="product-ctrl">
            {/* <ErrorBox msg={"هیچ محصولی یافت نشد"}></ErrorBox> */}
            <AddNewProduct></AddNewProduct>
            <ProducsTable></ProducsTable>
        </div>
    )
}
export default Product