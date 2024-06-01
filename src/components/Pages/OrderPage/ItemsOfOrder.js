import React, {Component} from 'react';
import { FaTrash} from "react-icons/fa";

class ItemsOfOrder extends Component {
    render() {
        return (
            <div className='orderConfirmation__item'>
                <div className='orderConfirmation__image -ibg'>
                    <img src={'./product/img/products/' + this.props.item.img} alt={this.props.item.title}/>
                </div>
                <div className='orderConfirmation__body'>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <div className='orderConfirmation__body-footer'>

                        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
                        <b>{this.props.item.priseInRub},00 BYN</b>
                    </div>

                    </div>


            </div>
        );
    }
}

export default ItemsOfOrder;