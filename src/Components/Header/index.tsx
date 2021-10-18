import {Link} from "react-router-dom";

import {BsCart2} from "react-icons/bs";

import Logo from "../../Assets/Images/logo.svg";

import "./styles.css";

function Header(){
    return (
        <header id="header">
            <div className="container">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>

                <Link className="cartButton" to="/cart">
                    <div className="sidePanel">
                        <strong>Meu carrinho</strong>
                        <p>0 item(s)</p>
                    </div>
                    <BsCart2 size={25} color="black"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;