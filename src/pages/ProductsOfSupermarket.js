import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../style/generalstyle.css';

const ProductsOfASupermarket = () =>{

      const productList1 = [
        { productName: "Coca-cola", price: "€1.00" },
        { productName: "Fanta", price: "€1.10" },
        { productName: "Ice tea", price: "€1.20" }
    ];

    const productList2 = [
        { productName: "Coca-cola", price: "€1.30" },
        { productName: "Fanta", price: "€1.40" },
        { productName: "Ice tea", price: "€1.50" }
    ];

    const productList3 = [
        { productName: "Coca-cola", price: "€1.60" },
        { productName: "Fanta", price: "€1.70" },
        { productName: "Ice tea", price: "€1.80" }
    ];

    return [productList1, productList2, productList3]
}

function getSelectedSupermarket(supermarketId, productLists) {
    let selectedProductList;
    let supermarketName;
    let error = null;

    if (supermarketId === "1") {
        selectedProductList = productLists[0];
        supermarketName = "NicoSupermarket";
    } else if (supermarketId === "2") {
        selectedProductList = productLists[1];
        supermarketName = "MartijnSupermarket";
    } else if (supermarketId === "3") {
        selectedProductList = productLists[2];
        supermarketName = "GabySupermarket";
    } else {
        error = <h2>Invalid supermarketId</h2>;
    }

    return { selectedProductList, supermarketName, error };
}


const TableOfProductsOfASupermarket = () => {
    let { supermarketId } = useParams();
    const productLists = ProductsOfASupermarket()
    const { selectedProductList, supermarketName, error } = getSelectedSupermarket(supermarketId, productLists);

    if (error) {
        return error;
    }

    return (
        <>
            <h1>Prices of {supermarketName}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedProductList.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Link className="action-button" to="/">
                <button>Back to Supermarkets Page</button>
            </Link>
        </>
    );
};

export default TableOfProductsOfASupermarket;
