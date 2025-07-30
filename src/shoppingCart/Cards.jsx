import { useEffect, useState } from "react";

const Electronic = () => {
    const [products, setProducts] = useState([]); // Store array of products

    useEffect(() => {
        fetch("https://dummyjson.com/carts", { mode: "cors" })
            .then((response) => response.json())
            .then((data) => {
                // Extract all products from all carts
                const allProducts = data.carts.flatMap(cart => cart.products);
                setProducts(allProducts); // Set the state with the array of products
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Card component to display individual product
    const ProductCard = ({ product }) => (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
            {product.thumbnail && (
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    );

    return (
        <div>
            <h1>All Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* Map through products and render a card for each */}
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Electronic;
