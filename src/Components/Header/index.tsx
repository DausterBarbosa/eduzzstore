import {FaShoppingCart} from "react-icons/fa";

import Logo from "../../Assets/Images/logo.png";

import "./styles.css";

function Header(){
    return (
        <header id="header">
            <img src={Logo} alt="Logo" />

            <div className="cartButton">
                <div className="sidePanel">
                    <strong>Meu carrinho</strong>
                    <p>1 item</p>
                </div>
                <FaShoppingCart size={30} color="#ffcd33"/>
            </div>
        </header>
    );
}

export default Header;