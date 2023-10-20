import img1 from "./../../assets/img/img1.png";

const Slider = () => {
    return (<section className="home" id="home">
        <div className="home-text">
        <h1>Force, <span>Physical & </span></h1>
        <h1>Enjoy to the fullest Life</h1>
            <a href="#" className="btn"> Explore Menu <i className="bx bx-right-arrow"></i></a>
            <a href="#" className="btn2"> Order now </a>
            <div className="home-img"> 
                <img src={img1} width="25%" height="25%"/>
            </div>
        </div>
    </section>);
};

export default Slider;