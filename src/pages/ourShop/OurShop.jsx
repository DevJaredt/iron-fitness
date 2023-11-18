import "./OurShop.css";
import Card from "../../componets/card/Card";
import { get } from "./../../utils/axios";
import { Parameters } from "./../../utils/constants";

import { useEffect, useState } from "react";

const OurShop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const url = `${Parameters.BACKEND_URL}/product`;
                console.log("🚀 ~ file: OurShop.jsx:17 ~ getData ~ url:", url)
                const productsDb = await get(url);
                console.log(productsDb);
                setProducts(productsDb.products);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);
    return (
        <div className="card-container"> 
            {
                products.map((product, index) =>
                    <Card id={product.id} img={product.image} description={product.description} title={product.title} price={product.price} key={index}/>
                )
            }
        </div>
    );
}
export default OurShop;