
import { addItemToCart } from "../../helper/cartManager";
import "./Card.css";

const onclickHandler = (item) => {
    addItemToCart(item);
};

const Card = ({ id, img, name , description, price }) => {
    return (
        <div className="card animate__animated animate__flipInX" style={{width: "15rem", height: "500px"}}>
            <img src={ img } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">${price}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onclickHandler({ id, img, name, description, price })}>+</button>
            </div>
        </div>
    )
}

export default Card;