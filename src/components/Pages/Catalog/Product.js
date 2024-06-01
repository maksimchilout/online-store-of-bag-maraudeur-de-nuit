import React from 'react';
import {useParams} from "react-router-dom";
import {Content} from "./slider/Content/Content";
import Description from "./Description";

function Product(props) {
    const {id} = useParams()
    window.scrollTo(0, 0)
    const item = props.items.find(el => el.id === +id)
    return (
        <div className='product__container'>
            <h2 className='productTitle'>{item.title}</h2>
            <div className='productBody'>
                <div className='productPhoto -ibg'>
                    <img src={'./img/products/' + item.img} alt="sas"/>
                </div>
                <Description item={item}/>
            </div>
            <Content item ={item}/>

        </div>
    );
}

export default Product;