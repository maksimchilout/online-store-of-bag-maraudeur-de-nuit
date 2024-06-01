import React, {useState} from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import ShowOrders from "./ShowOrders";
import ShowNothing from "./ShowNothing";

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    let [menuOpen, setMenuOpen] = useState(false)
    const menuOpenFun = () =>{
        setCartOpen(false)
        setMenuOpen(!menuOpen)
    }
    const cartOpenFun = () => {
        setMenuOpen(false)
        setCartOpen(!cartOpen)
    }
    const menuAndCartClose = () => {
        setMenuOpen(false)
        setCartOpen(false)
    }
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__container_wide'>
                    <div className='header__body'>
                        <div className="logo">
                            <p className='logoAnimation'>
                                Maraudeur De Nuit
                            </p>

                            {/*<img className='logoImg' src="./img/Maraudeur-De-Nuit.png" alt=""/>*/}
                        </div>
                        <ul className={`nav ${menuOpen ? '_active': ''}`}>
                            <NavLink to='/main' onClick={menuAndCartClose} className='nav__item'>Главная</NavLink>
                            <NavLink to='/catalog' onClick={menuAndCartClose} className='nav__item'>Каталог</NavLink>
                            <a href='#footer' onClick={menuAndCartClose} className='nav__item'>Контакты</a>
                        </ul>

                        <div className='order-icon'>
                            <FaShoppingCart onClick={cartOpenFun}
                                            className={`shop-cart-button ${cartOpen ? 'active' : ''}`}/>
                            {/*<span className='ordered-amount'>1</span>*/}
                        </div>
                            <div className={`shop-cart ${cartOpen ? 'active' : ''}`}>
                                {props.orders.length > 0 ? <ShowOrders
                                    orders={props.orders}
                                    closeCart={setCartOpen}
                                    onDelete={props.onDelete}
                                    sumOfOrderPrice={props.sumOfOrderPrice}
                                /> : <ShowNothing/>}
                            </div>
                        <button type="button"
                                onClick={menuOpenFun}
                                className={`icon-menu ${menuOpen ? '_active': ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;