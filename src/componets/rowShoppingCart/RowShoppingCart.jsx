import "./RowShoppingCart.css";

const RowShoppingCart = ({ id, title, description, price, amount, img, callbackRemove, callbackAddOne, callbackRemoveOne }) => {
    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={img}/></div>
                <div className="col">
                    <div className="row text-muted">{title}</div>
                    <div className="row">{description}</div>
                </div>
                <div className="col">
                <a className="pointer" onClick={() => callbackRemoveOne(id)}>-</a><i href="#" className="border">{amount}</i><a className="pointer" onClick={() => callbackAddOne(id)}>+</a>
                </div>
                <div className="col">&euro; {price} <span className="close" onClick={() => callbackRemove(id)}>&#10005;</span></div>
            </div>
        </div>
    );
};

export default RowShoppingCart;