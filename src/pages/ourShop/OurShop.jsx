import "./OurShop.css";
import Card from "../../componets/card/Card";
import img from "./../../assets/img/img-proteinas/bipro-3lb-nueva-presentacion.webp"
const OurShop = () => {
    const products = [
        {
            id: 1,
            title: "Creatina",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 2,
            title: "Creatina1",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 3,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
    ];
    return (
        <div className="card-container"> 
            {
                products.map((product, index) => <Card img={product.img} description={product.description} title={product.title} key={index} /> )
            }
        </div>

        // <Card img={img} />
    );
}
export default OurShop;