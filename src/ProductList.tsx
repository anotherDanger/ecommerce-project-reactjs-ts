import React, { useEffect, useState } from "react";
import { fetchProducts } from './Products.tsx';

interface Product {
    id: number;
    name: string;
    stock: number;
    price: number;
}

export const ProductList: React.FC = (): React.ReactElement => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const loadProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-semibold text-center mb-8 pt-16">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div className="bg-[#F6F4F0] shadow-lg rounded-lg p-6 flex flex-col items-center " key={product.id}>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h2>
                        <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
                        <p className="text-gray-600 mb-2">Price: ${product.price.toFixed(2)}</p>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
