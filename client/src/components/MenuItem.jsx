import { Link } from "react-router-dom";
import styles from "../components/MenuItem.module.css";

function MenuItem({ to, label }) {
    return (
        <li className={styles.item}>
            <Link className={styles.link} to={to}>
                {label}
            </Link>
        </li>
    );
}

export default MenuItem;
