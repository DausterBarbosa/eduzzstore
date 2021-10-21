import {Link} from "react-router-dom";

import {useSelector} from "react-redux";

import {BsCart2} from "react-icons/bs";

import Logo from "../../Assets/Images/logo.svg";

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

function Header(){
    const quant = useSelector((state:StateProps) => state.cart.length);

    return (
        <header id="header">
            <div className="container">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>

                <Link className="cartButton" to="/cart">
                    <div className="sidePanel">
                        <strong>Meu carrinho</strong>
                        <p>{quant} item(s)</p>
                    </div>
                    <BsCart2 size={25} color="#333333"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;