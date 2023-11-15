import { getData, setData } from "../utils/localStorage";

export const addItemToCart = newItem => {
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
};