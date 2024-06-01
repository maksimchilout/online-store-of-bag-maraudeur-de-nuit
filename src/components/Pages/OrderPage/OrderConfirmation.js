import React from 'react';
import ItemsOfOrder from "./ItemsOfOrder";
function OrderConfirmation(props) {
    return (
        <div className='orderConfirmation'>
            <div className='orderConfirmation__title _title'>Оформление заказа</div>
            <div className='orderConfirmation__items'>
                {props.orders.map(
                    el => (
                        <ItemsOfOrder
                            key={el.id}
                            onDelete={props.onDelete}
                            item={el}/>
                    )
                )}
            </div>
            <div className='line'></div>
            <div className='all_summ'>
                <p>Стоимость заказа:</p>
                <p className='finaly_price'>{props.summOfOrders},00 BYN</p>
            </div>

        </div>
    );
}

export default OrderConfirmation;