import Modal from 'react-modal';
import { addItemToCart } from "../../helper/cartManager";
import "./Card.css";
import { useState } from "react";
import CardDetails from '../cartDetails/CartDetails';

const onclickHandler = (item) => {
    addItemToCart(item);
};

const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "55%",
      height: "80%"
    },
};

const Card = ({ id, img, name , description, price }) => {
    const [openDescription, setOpenDescription] = useState(false);
    const closeModal =() =>{
        setOpenDescription(false)

    }
    return (
        <div className="card animate__animated animate__flipInX" style={{width: "15rem", height: "32rem"}}>
            <img src={ img } className="card-img-top" alt="..." style={{ height: "14rem" }}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p data-tooltip={description} className="card-text">{description.slice(0,50)+"..."}</p>
                <p className="card-text">${price}</p>
                <button className="btn btn-outline-primary btn-sm" onClick={() => onclickHandler({ id, img, name, description, price })}>+</button>
                <button className="btn btn-outline-secondary btn-sm" onClick={()=>setOpenDescription(true)}  >View</button>
            </div>
            <Modal
                isOpen={openDescription}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <CardDetails description={description} img={img} name={name} price={price} callbackAddToCart={onclickHandler}/>
            </Modal>
        </div>
    )
}

export default Card;