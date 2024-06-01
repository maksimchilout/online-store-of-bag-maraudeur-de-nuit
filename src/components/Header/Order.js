import React, {Component} from 'react';
import { FaTrash} from "react-icons/fa";

class Order extends Component {
    debugger
    render() {
        return (
            <div className='item-shop-cart'>
                <div className='item-shop-cart__image'>
                    <img src={'./product/img/products/' + this.props.item.img} alt={this.props.item.title}/>
                </div>
                <div className='item-shop-cart__body'>
                    <h2>{this.props.item.title}</h2>
                    <b>{this.props.item.priseInRub},00 BYN</b>
                    <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/></div>

            </div>
        );
    }
}

export default Order;