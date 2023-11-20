import "./RowShoppingCart.css";

const RowShoppingCart = ({ id, name, price, amount, img, callbackRemove, callbackAddOne, callbackRemoveOne }) => {
    return (
        <div className="row border-top border-bottom">
            <div className="row main align-items-center">
                <div className="col-2"><img className="img-fluid" src={img}/></div>
                <div className="col">
                    <div className="row text-muted">{name}</div>
                </div>
                <div className="col">
                <a className="pointer" onClick={() => callbackRemoveOne(id)}>-</a><i href="#" className="border">{amount}</i><a className="pointer" onClick={() => callbackAddOne(id)}>+</a>
                </div>
                <div className="col">$ {price} <span className="close pointer" onClick={() => callbackRemove(id)}>&#10005;</span></div>
            </div>
        </div>
    );
};

export default RowShoppingCart;