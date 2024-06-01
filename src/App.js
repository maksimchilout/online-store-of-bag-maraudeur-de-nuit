import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import React, {Component} from "react";
import Items from "./components/Pages/Catalog/Items";
import {Route, Routes} from "react-router-dom";
import Main from "./components/Pages/Main/Main";
import Product from "./components/Pages/Catalog/Product";
import OrderConfirmationContainer from "./components/Pages/OrderPage/OrderConfirmationContainer";
import CareOfProducts from "./components/Pages/CareOfProducts/CareOfProducts";
import {Api} from "./API/Api";
import DefineAFake from "./components/Pages/DefineAFake/DefineAFake";
import {fly} from "./components/UI/Fly";
import {items} from "./Data/Data";
import DeliveryAndReturn from "./components/Pages/DeliveryAndReturn/DeliveryAndReturn";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumOfOrderPrice: 0,
            orders: [],
            items: items
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.updateSumOfOrders = this.updateSumOfOrders.bind(this)
        this.clearOrderCart = this.clearOrderCart.bind(this)
    }
    async componentDidMount() {
        let rate
        try {
            rate = await Api()
        }
        catch {
            rate = 3.22
        }
        this.setState({
            items: [
                ...this.state.items.map( el =>{
                    return {
                        ...el,
                        priseInRub: Math.ceil(rate * parseInt(el.newPrice))
                    }
                })
            ]
        })
    }
    updateSumOfOrders() {
        setTimeout(() => {
            this.setState({sumOfOrderPrice: Math.round(this.state.orders.reduce((prev, current) => prev + Number.parseFloat(current.priseInRub), 0) * 100) / 100})
        }, 0)


    }
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
        this.updateSumOfOrders()
    }
    clearOrderCart() {
        this.setState({orders: [], sumOfOrderPrice: 0})
    }
    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id) {
                isInArray = true
            }
        })
        if (!isInArray) {
           fly(item)
            this.setState({
                orders: [
                    ...this.state.orders,
                    item,
                ]
            })
            this.updateSumOfOrders()
        }
    }
    render() {
        return (
            <div className='wrapper'>
                <Header
                    orders={this.state.orders}
                    onDelete={this.deleteOrder}
                    sumOfOrderPrice={this.state.sumOfOrderPrice}
                />
                <div className='content'>

                        <Routes>
                            <Route exact path='/' element={<Main/>}/>
                            <Route path='/main' element={<Main/>}/>
                            <Route path='/careOfProducts' element={<CareOfProducts/>}/>
                            <Route path='/deliveryAndReturn' element={<DeliveryAndReturn/>}/>
                            <Route path='/defineAFake' element={<DefineAFake/>}/>
                            <Route path='/product/:id' element={<Product
                                items={this.state.items}
                            />}/>
                            <Route path='/orderConfirm' element={<OrderConfirmationContainer
                                                        orders={this.state.orders}
                                                        summOfOrders={this.state.sumOfOrderPrice}
                                                        onDelete={this.deleteOrder}
                                                        onClearOrderCart={this.clearOrderCart}
                            />}/>
                            <Route path='/catalog' element={<Items
                                items={this.state.items}
                                onAdd={this.addToOrder}
                            />}/>
                            <Route path='*' element={<div className='notFound__container'>404 NOT FOUND</div>}/>
                        </Routes>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default App;
