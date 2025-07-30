import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Electronic = () => {
    const [products, setProducts] = useState([]); // Store array of products
    const [cartCount, setCartCount] = useState(0); // State for the cart item counter

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
    const addToCart = (product) => {
        setCartCount(prevCount => prevCount + 1); // Increment the cart counter
        console.log(`Added ${product.title} to cart`); // Optional: Log the action
        // In a real app, you would also update the cart state with the product details
    };
    // Card component to display individual product
    const ProductCard = ({ product }) => (
        <div style={{background: '#4662AF', border: '1px solid #ccc', margin: '10px', padding: '16px', width: '200px', borderRadius: '4rem'}}>
            {product.thumbnail && (
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{width: '100%', height: 'auto', borderRadius: '2rem', background: '#003'}}
                />
            )}
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button style={{background: '#AAA', borderRadius: '10px'}} onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );

    return (
        <div>
            <div style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                background: '#007bff',
                color: 'white',
                padding: '10px',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000
            }}>
                {cartCount}
            </div>
            <h1>All Products</h1>
            <Link to="/">
                <button>Go Back</button>
            </Link>
            <div style={{display: 'flex', flexWrap: 'wrap' ,background: '#547BA1'}}>
                {/* Map through products and render a card for each */}
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Electronic;
