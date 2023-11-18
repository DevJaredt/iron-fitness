import "./OurShop.css";
import Card from "../../componets/card/Card";
import { get } from "./../../utils/axios";
import { Parameters } from "./../../utils/constants";

import { useEffect, useState } from "react";

const OurShop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const url = `${Parameters.BACKEND_URL}/product`;
            const productsDb = await get(url);
            setProducts(productsDb.products);
        };
        getData();
    }, []);
    return (
        <div className="card-container"> 
            {
                products.map((product, index) =>
                    <Card id={product.id} img={product.img} description={product.description} title={product.title} price={product.price} key={index}/>
                )
            }
        </div>
    );
}
export default OurShop;