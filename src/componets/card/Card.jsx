
import { addItemToCart } from "../../helper/cartManager";
import "./Card.css";

const onclickHandler = (item) => {
    addItemToCart(item);
};

const Card = ({ img, title, description }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={ img } className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <button>+</button>
                </div>
        </div>
    )
}

export default Card;