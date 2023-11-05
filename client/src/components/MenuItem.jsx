import { Link } from "react-router-dom";

function MenuItem({ to, label }) {
    return (
        <li className="p-3 sm:p-0">
            <Link className="sm:ml-4" to={to}>{label}</Link>
        </li>
    );
}

export default MenuItem;
