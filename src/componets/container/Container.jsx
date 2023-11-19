import img2 from "./../../assets/img/img2.png";
import img3 from "./../../assets/img/img3.png";
import img4 from "./../../assets/img/img4.png";
import "./Container.css";

const Container = () => {
    return ( <section className="container"> 

    <div className="container-box">
        <img src={img2}/>
        <h3>7:00 am - 9:00 pm</h3>
        <a href="#">Working hours</a>
    </div>

    <div className="container-box">
        <img src={img4}/>
        <h3>Center park - Bocagrande</h3>
        <a href="#">Get directions</a>
    </div>

    <div className="container-box">
        <img src={img3}/>
        <h3>+57 3008987456</h3>
        <a href="#">Call us now</a>
    </div>

</section>);
};
export default Container;