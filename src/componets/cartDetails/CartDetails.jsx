import "./CartDetails.css"

const CardDetails = ({img, name , description, price}) => {
    return <div style={{color:"#000000"}}>
    <div className="card_detail__title">
      <h3>Details of the products</h3>
    </div>
    <div className="card_detail__body">
      <div className="half">
        <div className="featured_text">
          <h1>{name}</h1>
          <p className="price">${price}</p>
        </div>
        <div className="image">
          <img src={img} style={{width:"22rem"}} alt=""/>
        </div>
      </div>
      <div className="half">
        <div className="description">
          <p>{description}</p>
        </div>
        <span className="stock"><i className="fa fa-pen"></i> In stock</span>
        <div className="reviews">
          <ul className="stars">
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star"></i></li>
            <li><i className="fa fa-star-o"></i></li>
          </ul>
          <span>(64 reviews)</span>
        </div>
      </div>
    </div>
    <div className="card_detail__footer">
      <div className="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div className="action">
        <button type="button">Add to cart</button>
      </div>
    </div>
  </div>
}

export default CardDetails;