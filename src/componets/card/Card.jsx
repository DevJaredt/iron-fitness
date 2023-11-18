
import { addItemToCart } from "../../helper/cartManager";
import { success } from "../../utils/toast";
import "./Card.css";

const onclickHandler = (item) => {
    addItemToCart(item);
    success("Item agregado con exito");
};

const Card = ({ id, img, title, description, price }) => {
    return (
        <div className="card" style={{width: "15rem", height: "500px"}}>
            <img src={ img } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onclickHandler({ id, img, title, description, price })}>+</button>
            </div>
        </div>
    )
}

export default Card;