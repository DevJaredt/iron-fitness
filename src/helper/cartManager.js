import { post } from "../utils/axios";
import { Parameters } from "../utils/constants";
import { getData, setData } from "../utils/localStorage";
import { success, error } from "./../utils/toast";

export const addItemToCart = async newItem => {
    try {
        let cart = getData("cart");
        if (!cart) cart = [] 
        const index = cart.findIndex(item => item.id === newItem.id);
        if (index >=0 ) {
            const amount = cart[index].amount + 1;
            cart[index] = {...cart[index], amount};
            setData("cart", cart);
        } else {
            cart.push({...newItem, amount: 1});
            setData("cart", cart);
        }
        const url = `${Parameters.BACKEND_URL}/cart`;
        const data = {
            product_id: newItem.id,
            ammount: 1
        };
        await post(url, data);
        success("Item agregado con exito");
    } catch (err) {
        error("Error al agregar item")
    }
};