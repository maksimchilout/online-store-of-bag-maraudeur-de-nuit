import React, {useEffect, useState} from 'react';
import { TextField } from "@mui/material";
import * as Yup from 'yup';
import * as yup from 'yup';
import { useFormik } from 'formik';
import ModalCard from "./OrderConfirmationPopup";




const validationSchema = yup.object({
    name: Yup.string()
        .min(2, 'Минимум 2 буквы')
         .max(50, 'Максимум 50 букв')
         .required('Обязательное поле'),
    number: yup
        .string('Введите ваш номер')
        .min(12, 'Номер должен быть введен в международном формате 375 ** *******')
        .max(12, 'Номер должен быть введен в международном формате 375 ** *******')
        .required('Обязательное поле'),
});

function OrderConfirmationForm(props) {
    const [modal, setModal] = useState(false)
    useEffect(()=> {

    }, [modal])
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: validationSchema,

        onSubmit: (values) => {
            const orderedProducts = props.orders.map((el) =>{
                return {
                    product: el.title,
                    price: el.newPrice,
                }
            })
            const name = values.name.trim();
            const number = values.number;
            const fullOrderedPrice = props.summOfOrders
            const url = `https://api.telegram.org/bot6919665819:AAF19JxrEuiOFoi7teAOyZr0CU_v9NPZSIg/sendMessage?chat_id=-1002128774274&text=Имя:%20${name}%0AНомер:%20${number}%0AЗаказ:%20${JSON.stringify(orderedProducts)}%0AПолная стоимость:%20${fullOrderedPrice}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        setModal(true)
                        values.name =''
                        values.number = ''
                        props.onClearOrderCart()
                    } else {
                        alert('Возникла ошибка при оформлении заказа. Попробуйте позже.');
                    }
                })
                .catch(error => console.error(error));
        },
    });

    return (
        <div>
            {modal && <ModalCard/>}
            <form className='fromOrder' onSubmit={(e) => {
                e.preventDefault()
                formik.handleSubmit()
            }}>
                <TextField
                    className='nameField'
                    id="name"
                    name="name"
                    label="Имя"

                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    className='numberField'
                    id="number"
                    color="primary"
                    name="number"
                    label="Номер"
                    type="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.number && Boolean(formik.errors.number)}
                    helperText={formik.touched.number && formik.errors.number}
                />
                <button className='formButton'  type='submit'>Оформить заказ</button>
            </form>
        </div>
    );
}
    export default OrderConfirmationForm




