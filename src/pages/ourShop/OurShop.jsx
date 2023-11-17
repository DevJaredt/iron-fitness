import "./OurShop.css";
import Card from "../../componets/card/Card";
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
        {
            id: 4,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 5,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 6,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 7,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
        {
            id: 8,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },        {
            id: 9,
            title: "Creatina2",
            description: "Te ayuda a la recuperacion muscular",
            img: "http://placekitten.com/200/300"
        },
    ];
    return (
        <div className="card-container"> 
            {
                products.map((product, index) => <Card id={product.id} img={product.img} description={product.description} title={product.title} key={index} /> )
            }
        </div>

        // <Card img={img} />
    );
}
export default OurShop;