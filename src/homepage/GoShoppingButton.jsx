import { Link } from "react-router-dom";

export default function GoShoppingButton () {
    return (
        <Link to="/shoppingCart">
            <button>Go Shopping</button>
        </Link>
    )
}