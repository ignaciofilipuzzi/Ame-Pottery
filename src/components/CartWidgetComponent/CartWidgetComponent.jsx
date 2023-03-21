import React from "react";
import Carrito from "../../../images/Carrito.png"

export const CartWidgetComponent = () => {
    return (
        <div className="cart-widget-div">
        <img className="cart-icon" src={Carrito} alt="cart icon" />
        <span className='bubble-icon'>1</span>
        </div>

    );
}
