import {MdOutlineAddShoppingCart} from "react-icons/md";

import Header from "../../Components/Header";

import "./styles.css";

function Catalog(){
    return (
        <div id="catalog">
            <Header/>

            <ul>
                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>

                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>

                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>

                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>

                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>

                <li>
                    <img src="https://gloimg.gbtcdn.com/soa/gb/item/6575801921400676352/16172/goods_img_big-v17/29f138422045.jpg" alt="" />
                    <div className="description">
                        <strong>Smartwatch com tela sensíve ao toque de 1,71 Polegadas.</strong>
                        <p>R$ 144,00</p>
                    </div>
                    <div className="addbutton">
                        <div className="quantinfo">
                            <MdOutlineAddShoppingCart color="#FFF" size={25}/>
                            <p>1</p>
                        </div>
                        <strong>ADICIONAR AO CARRINHO</strong>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Catalog;