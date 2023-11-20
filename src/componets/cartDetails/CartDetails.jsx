import "./CartDetails.css"

const CardDetails = ({img, name , description, price, callbackAddToCart}) => {
    return (
      <div className="container mt-5" style={{ "color": "#000000" }}>
        <div className="row">
          <div className="col-md-6">
            <img
              src={img}
              className="img-fluid rounded product-image"
              alt={name}
              style={{ transition: 'transform 0.5s ease' }}
              onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </div>
          <div className="col-md-6">
            <div className="product-details">
              <h2 className="product-title">{name}</h2>
              <p className="product-description">{description}</p>
              <p className="product-price">Price: ${price}</p>
              <button className="btn btn-primary" onClick={() => callbackAddToCart({img, name , description, price, callbackAddToCart})}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CardDetails;