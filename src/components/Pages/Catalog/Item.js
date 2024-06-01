import React from 'react';
import {NavLink} from "react-router-dom";
import {IconButton} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Item(props) {
    const path = `/product/${props.item.id}`

    return (
        <div key={props.item.id} id={props.item.id} className='item'>
            <div className='item__image -ibg'>
                <img src={'./product/img/products/' + props.item.img} alt={props.item.title}/>
            </div>
            <div className='item__body'>
                <h2 className='item__title'>{props.item.title}</h2>
                <p className='item__desc'>{props.item.desc}</p>
                <div className='item__price'>
                    <div className='item__price_dol'>{props.item.newPrice}$</div>
                    <div className='item__price_line'></div>
                    <div className='item__price_rub'>{props.item.priseInRub},00 BYN</div>
                </div>
                <div className='item__footer'>
                    <NavLink className='item__footer_to-product' to={path}>
                        Подробнее
                    </NavLink>

                    <span className='item__to-product' onClick={() => {
                        props.onAdd(props.item)
                    }}>
                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <AddShoppingCartIcon/>
                            </IconButton>
                        </span>
                </div>


            </div>
        </div>
    );
}

export default Item;