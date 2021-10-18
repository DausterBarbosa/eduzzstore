import {MdDelete} from "react-icons/md";
import {IoMdRemoveCircleOutline, IoMdAddCircleOutline} from "react-icons/io";

import Header from "../../Components/Header";

import "./styles.css";

function Cart(){
    return (
        <div id="cart">
            <Header/>

            <div className="cartpanel">
                <table>
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
                    <tr>
                        <td>
                            <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                        </td>
                        <td className="description">
                            <strong>erqw oiuwert fkf laksj dlfkajsd flkajsç fkajsçdlkj</strong>
                            <p>R$ 150,00</p>
                        </td>
                        <td>
                            <div  className="quantpanel">
                                <IoMdAddCircleOutline cursor="pointer" size={25} color="#f30240"/>
                                <input type="text" readOnly value="1"/>
                                <IoMdRemoveCircleOutline cursor="pointer" size={25} color="#f30240"/>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 500,00</strong>
                        </td>
                        <td>
                            <MdDelete cursor="pointer" size={25} color="#f30240"/>
                        </td>
                    </tr>
                </table>
                <div className="footer">
                    <div className="footerbutton">
                        <strong>FINALIZAR PEDIDO</strong>
                    </div>

                    <div className="totalprice">
                        <p>TOTAL:</p>
                        <strong>R$ 500,00</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;