import React from 'react';
import OrderConfirmation from "./OrderConfirmation";
import OrderConfirmationForm from "./OrderConfirmationForm";

function OrderConfirmationContainer(props) {
    return (
        <div className='orderConfirmation__container'>
            <OrderConfirmation
                orders={props.orders}
                onDelete={props.onDelete}
                summOfOrders={props.summOfOrders}
            />

            <OrderConfirmationForm
                orders={props.orders}
                summOfOrders={props.summOfOrders}
                onClearOrderCart={props.onClearOrderCart}
            />
        </div>
    );
}

export default OrderConfirmationContainer;
