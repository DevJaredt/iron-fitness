
import { addItemToCart } from "../../helper/cartManager";
import { success } from "../../utils/toast";
import "./Card.css";

const onclickHandler = (item) => {
    addItemToCart(item);
    success("Item agregado con exito");
};

const Card = ({ id, img, title, description }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => onclickHandler({ id, img, title, description })}>+</button>
                </div>
        </div>
    )
}

export default Card;