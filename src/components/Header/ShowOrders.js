import Order from "./Order";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";

const ShowOrders = (props) => {
    // let summa = Math.round(props.orders.reduce((prev, current) => prev + Number.parseFloat(current.newPrice), 0) * 100) / 100
    useEffect(() =>{}, [props.sumOfOrderPrice])
    return (

        <div>
            {props.orders.map(
                el => (
                    <Order
                        key={el.id}
                        onDelete={props.onDelete}
                        item={el}/>
                )
            )}
            <div className='shop-cart__footer'>
                <p className='summa'><span>Сумма: </span>{props.sumOfOrderPrice},00 BYN</p>
                <Button onClick={() => props.closeCart(false)} className='confirmOrder' variant="contained">
                    <NavLink to='/orderConfirm'>Оформить заказ</NavLink>
                </Button>
            </div>
        </div>
    )
}
export default  ShowOrders