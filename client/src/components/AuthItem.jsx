import { Link } from "react-router-dom";

function AuthItem({ classes, to, label, onClick }) {
  return (
    <li className="p-3 mt-2 sm:p-0 sm:mt-0">
      <Link
        className={`py-1 px-2 rounded font-semibold ${classes} sm:ml-4`}
        to={to}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
}

export default AuthItem;
