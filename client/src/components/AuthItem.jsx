import { Link } from "react-router-dom";

function AuthItem({ to, label, isAdmin, isNormalUser, onClick }) {
    const background = () => {
        return isAdmin
            ? "bg-light-aqua"
            : isNormalUser
            ? "bg-light-blue"
            : "bg-light-purple";
    };

    return (
        <li className="p-3 sm:p-0">
            <Link
                className={`p-1 rounded-[3px] text-dark font-semibold ${background()} sm:ml-4`}
                to={to}
                onClick={onClick}
            >
                {label}
            </Link>
        </li>
    );
}

export default AuthItem;
