import { Link } from "react-router-dom";

function AuthItem({ to, label, isAdmin, isNormalUser, onClick }) {
    const background = () => {
        return isAdmin
            ? "bg-gradient-to-t from-clean-green to-forest-green"
            : isNormalUser
            ? "bg-gradient-to-t from-light-blue to-blue-gray"
            : "bg-gradient-to-t from-pink to-magneta";
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
