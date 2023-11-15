import  img1 from "./../../assets/img/img1.png";


const Shop = () =>{
 return (<section className="shop" id="shop">
    <div className="middle-text">
        <h4>Our shop</h4>
        <h2>The popular prodcuts by Iron fitness</h2>
    </div>

    <div className="shop-content">

        <div className="row">
            <img src={img1}/>
            <h3>Creatina</h3>
            <p>breve descripcion</p>
                <div className="in-text">
                    <div className="price">
                        <h6>100.000$</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Order now</a>
                    </div>
             </div>
             <div className="top-icon">
                <a href="#"><i className="bx bx-heart"></i></a> 
             </div>
        </div>

        <div className="row">
            <img src={img1}/>
            <h3>Creatina 2</h3>
            <p>breve descripcion</p>
                <div className="in-text">
                    <div className="price">
                        <h6>200.000$</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Order now</a>
                    </div>
             </div>
             <div className="top-icon">
                <a href="#"><i className="bx bx-heart"></i></a> 
             </div>
        </div>

        <div className="row">
            <img src={img1}/>
            <h3>Creatina 3</h3>
            <p>breve descripcion</p>
                <div className="in-text">
                    <div className="price">
                        <h6>150.000$</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Order now</a>
                    </div>
             </div>
             <div className="top-icon">
                <a href="#"><i className="bx bx-heart"></i></a> 
             </div>
        </div>

        <div className="row">
            <img src={img1}/>
            <h3>Creatina 4</h3>
            <p>breve descripcion</p>
                <div className="in-text">
                    <div className="price">
                        <h6>170.000$</h6>
                    </div>
                    <div className="s-btn">
                        <a href="#">Order now</a>
                    </div>
             </div>
             <div className="top-icon">
                <a href="#"><i className="bx bx-heart"></i></a> 
             </div>
        </div>

      
    </div>

    <div className="row-btn">
        <a href="" className="btn"> All products <i className="bx bxs-right-arrow"></i></a>
    </div>

 </section>

 )
}

export default Shop; 