import React from 'react';
import Item from "./Item";


function Items(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
    return (
        <div className='catalog'>
            <div className='catalog__container'>
                <h2 className='catalog__title _title'>Женские сумки и Аксесуары</h2>
                <div className='catalog__items'>
                    {props.items.map(el => (

                        <Item
                            key={el.id}
                            item={el}
                            onAdd={props.onAdd}
                        />
                    ))}
                </div>

            </div>

        </div>
    );
}

export default Items;