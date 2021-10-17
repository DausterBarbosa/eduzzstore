import {BsCart2} from "react-icons/bs";

import Logo from "../../Assets/Images/logo.svg";

import "./styles.css";

function Header(){
    return (
        <header id="header">
            <div className="container">
                <img src={Logo} alt="Logo" />

                <div className="cartButton">
                    <div className="sidePanel">
                        <strong>Meu carrinho</strong>
                        <p>0 item(s)</p>
                    </div>
                    <BsCart2 size={25}/>
                </div>
            </div>
        </header>
    );
}

export default Header;