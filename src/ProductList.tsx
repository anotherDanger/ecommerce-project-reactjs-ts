import React, { useEffect, useState } from "react";
import {fetchProducts} from './Products.tsx';

interface Product{
    id:number;
    name:string;
    stock:number;
    price:number;
}

export const ProductList:React.FC = ():React.ReactElement => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() =>{
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);
    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) =>
                <li key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.stock}</p>
                    <p>{product.price}</p>
                </li>
                )}
            </ul>
        </div>
    )
}