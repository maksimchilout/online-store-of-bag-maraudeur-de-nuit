import React from 'react';

function Description(props) {
    return (
        <div className='description'>
            <div className='description__size des'>
                Размер: {props.item.size}
            </div>
            <div className='description__color des'>
                Цвет: {props.item.color}
            </div>
            <div className='description__material des'>
                Материал: {props.item.material}
            </div>
            <div className='description__accessories des'>
                Фурнитура: {props.item.accessories}
            </div>
        </div>
    );
}

export default Description;