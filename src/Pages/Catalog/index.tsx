import React, {useEffect, useState} from "react";

import Api from "../../services/api";

import {MdOutlineAddShoppingCart} from "react-icons/md";

import "./styles.css";

interface Product {
    id: number,
    description: string,
    image: string,
    price: number,
    formatted_price: string,
}

function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        Api.get<Product[]>("/products").then(({data}) => {
            setProducts(data);
        });
    }, [])

    return (
        <div id="catalog">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.description} />
                        <div className="description">
                            <strong>{product.description}</strong>
                            <p>{product.formatted_price}</p>
                        </div>
                        <div className="addbutton">
                            <div className="quantinfo">
                                <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                                <p>1</p>
                            </div>
                            <strong>ADICIONAR AO CARRINHO</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Catalog;