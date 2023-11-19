import "./ShoppingCart.css";

import RowShoppingCart from "../../componets/rowShoppingCart/RowShoppingCart";
import { getData, setData } from "./../../utils/localStorage";
import { useEffect, useState } from "react";
import { Parameters } from "../../utils/constants";
import { post, remove } from "../../utils/axios";
import { error, success } from "../../utils/toast";

const ShoppingCart = () => {
    const [products, setProducts] = useState([]);
    
    const totalPrice = products.reduce((acc, current) => acc += current?.price * current?.amount, 0);

    const removeProduct = async (id) => {
        try {
            const newProducts = products.filter(product => product.id !== id);
            const url = `${Parameters.BACKEND_URL}/cart/${id}`;
            await remove(url)
            setProducts(newProducts);
            setData("cart", newProducts);
            success("Item removido con exito");
        } catch (err) {
            error("Error al remover producto");
        }
    };

    const addOne = async (id) => {
        try {
            const newProducts = products.map((product) => {
                if (product.id === id) {
                    const amount = product.amount + 1;
                    return { ...product, amount };
                } else {
                    return product;
                }
            });
            const url = `${Parameters.BACKEND_URL}/cart`;
            const data = {
                product_id: id,
                ammount: 1
            };
            await post(url, data);
            success("Item agregado con exito");
            setProducts(newProducts);
        } catch (err) {
            error("Error al agregar producto");
        }
    };

    const removeOne = async (id) => {
        let amount;
        const newProducts = products.map((product) => {
            if (product.id === id) {
                amount = product.amount - 1;
                return { ...product, amount };
            } else {
                return product;
            }
        });
        if(amount === 0) {
            return removeProduct(id);
        }
        const url = `${Parameters.BACKEND_URL}/cart/removeOne`;
        const data = {
            product_id: id,
        };
        await post(url, data);
        setProducts(newProducts);
        success("Item removido con exito");
    };

    useEffect(() => {
        setProducts(getData("cart") || []);
    }, []);

    return ( <section className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title"> 
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{products.length} items</div>
                        </div>
                    </div>
                    {
                        products.map((product, key) => <RowShoppingCart id={product.id} callbackRemoveOne={removeOne} callbackAddOne={addOne} callbackRemove={removeProduct} title={product.title} description={product.description} amount={product.amount} price={product.price} img={product.img} key={key}/>)
                    }
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" style={{"padding-left": 0}}>ITEMS {products.length}</div>
                        <div className="col text-right">$ {totalPrice}</div>
                    </div>
                    <div className="row" style={{"border-top": "1px solid rgba(0,0,0,.1)", "padding": "2vh 0" }}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">$ {totalPrice}</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
            
        </section>
    );
};

export default ShoppingCart;