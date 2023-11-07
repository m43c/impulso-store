import { Link } from "react-router-dom";

function MenuItem({ to, label }) {
    return (
        <li className="p-3 sm:p-0 sm:ml-1">
            <Link
                className="p-2 rounded text-gryTxt font-semibold hover:bg-gryHvr"
                to={to}
            >
                {label}
            </Link>
        </li>
    );
}

export default MenuItem;
