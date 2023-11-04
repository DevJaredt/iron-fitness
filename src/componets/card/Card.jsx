
import "./Card.css";

const Card = ({ img, title, description }) => {
    return (
        <div className="container mx-auto mt-4">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={ img } className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">{description}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;