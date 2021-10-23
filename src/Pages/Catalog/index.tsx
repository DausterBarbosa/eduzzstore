import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";

import Api from "../../services/api";

import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {MdOutlineAddShoppingCart} from "react-icons/md";

import "./styles.css";
import { formatPrice } from "../../utils/format";

interface Product {
    id: number,
    description: string,
    image: string,
    price: number,
    formatted_price: string,
    amount: number,
}

interface StateProps{
    cart: Product[],
}

interface ItemAmount {
    [number:string]: number,
}

function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    const [amountItems, setAmountItems] = useState<ItemAmount>({});

    const [loading, setLoading] = useState(true);

    const cart = useSelector((state:StateProps) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        Api.get<Product[]>("/products").then(({data}) => {
            const newData = data.map(product => ({
                ...product,
                formatted_price: formatPrice(product.price)
            }));
            setProducts(newData);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const amounts = cart.reduce((prev, next) => ({
            ...prev,
            [next.id]: next.amount,
        }), {});
        
        setAmountItems(amounts);
    }, [cart]);

    function addToCart(addedproduct:Product){
        dispatch({
            type: "CHECK_STOCK",
            payload: addedproduct,
        });
    }

    return (
        <div id="catalog">
            {
                loading
                ? (
                    <div className="loading">
                        <AiOutlineLoading3Quarters size={100} color="#ffcd33" className="rotate"/>
                    </div>
                )
                : (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.description} />
                                <div className="description">
                                    <strong>{product.description}</strong>
                                    <p>{product.formatted_price}</p>
                                </div>
                                <div className="addbutton" onClick={() => addToCart(product)}>
                                    <div className="quantinfo">
                                        <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                                        <p>{amountItems[product.id] || 0}</p>
                                    </div>
                                    <strong>ADICIONAR AO CARRINHO</strong>
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default Catalog;