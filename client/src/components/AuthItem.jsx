import { Link } from "react-router-dom";
import styles from "../components/AuthItem.module.css";

function AuthItem({ to, label, isAdmin, isNormalUser, onClick }) {
    const itemClasses = () => {
        let assignedClass = styles.item;

        if (isAdmin) {
            assignedClass = `${styles.item} ${styles.addProduct}`;
        } else if (isNormalUser) {
            assignedClass = styles.welcome;
        }

        return assignedClass;
    };

    return (
        <li className={itemClasses()}>
            <Link className={styles.link} to={to} onClick={onClick}>
                {label}
            </Link>
        </li>
    );
}

export default AuthItem;
