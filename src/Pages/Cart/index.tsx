import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";

import {formatPrice} from "../../utils/format";

import {BsCartXFill} from "react-icons/bs";
import {MdDelete} from "react-icons/md";
import {IoMdRemoveCircleOutline, IoMdAddCircleOutline} from "react-icons/io";

import "./styles.css";

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

interface SubtotalsProps {
    [number:string]: number,
}

function Cart(){
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [subtotals, setSubtotals] = useState<SubtotalsProps>({});

    const cart = useSelector((state:StateProps) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        const total = Object.entries(subtotals).reduce((prev, next) => {
            return prev + next[1];
        }, 0)

        setTotalPrice(total);
    }, [subtotals]);

    useEffect(() => {
        const subtotalsResult = cart.reduce((prev, next) => ({
            ...prev,
            [next.id]: next.price * next.amount
        }), {});

        setSubtotals(subtotalsResult);
    }, [cart]);

    function addToCart(product:Product){
        dispatch({
            type: "CHECK_STOCK",
            payload: product
        });
    }

    function removeToCart(product:Product){
        dispatch({
            type: "REMOVE_PRODUCT",
            payload: product,
        });
    }

    function deleteToCart(product:Product){
        dispatch({
            type: "DELETE_PRODUCT",
            payload: product,
        });
    }

    return (
        <div id="cart">
            <div className="cartpanel">
                {
                    cart.length === 0
                    ? (
                        <div className="emptycart">
                            <BsCartXFill size={120} color="#c7c3c3"/>
                            <strong>Carrinho vazio</strong>
                        </div>
                    )
                    : (
                        <table>
                            <thead>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <strong>PRODUTO</strong>
                                    </td>
                                    <td>
                                        <strong>QUANTIDADE</strong>
                                    </td>
                                    <td>
                                        <strong>SUBTOTAL</strong>
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                cart.map(product => (
                                    <tr key={product.id}>
                                        <td>
                                            <img src={product.image} alt={product.description} />
                                        </td>
                                        <td className="description">
                                            <strong>{product.description}</strong>
                                            <p>{product.formatted_price}</p>
                                        </td>
                                        <td>
                                            <div  className="quantpanel">
                                                <IoMdAddCircleOutline cursor="pointer" size={25} color="#f30240" onClick={() => addToCart(product)}/>
                                                <input type="text" readOnly value={product.amount}/>
                                                <IoMdRemoveCircleOutline cursor="pointer" size={25} color="#f30240" onClick={() => removeToCart(product)}/>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>{formatPrice(subtotals[product.id])}</strong>
                                        </td>
                                        <td>
                                            <MdDelete cursor="pointer" size={25} color="#f30240" onClick={() => deleteToCart(product)}/>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    )
                }
                <div className="footer">
                    <div className={`${cart.length !== 0 ? "footerbutton" : "disabledbutton"}`}>
                        <strong>FINALIZAR PEDIDO</strong>
                    </div>

                    <div className="totalprice">
                        <p>TOTAL:</p>
                        <strong>{formatPrice(totalPrice)}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;