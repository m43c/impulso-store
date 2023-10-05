import { Link, Navigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.containerNav}>
                <h1 className={styles.containerTitle}>Impulso</h1>
                <ul className={styles.containerMenu}>
                    <li className={styles.containerMenuItem}>
                        <Link className={styles.containerMenuItemLink} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.containerMenuItem}>
                        <Link className={styles.containerMenuItemLink} to="/">
                            Category
                        </Link>
                    </li>
                    <li className={styles.containerMenuItem}>
                        <Link className={styles.containerMenuItemLink} to="/">
                            Blog
                        </Link>
                    </li>
                    <li className={styles.containerMenuItem}>
                        <Link className={styles.containerMenuItemLink} to="/">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className={styles.containerAuth}>
                    <ul className={styles.containerMenu}>
                        <li className={styles.containerMenuItem}>
                            <Link
                                className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink}`}
                                to="/signin"
                            >
                                Sign in
                            </Link>
                        </li>
                        <li className={styles.containerMenuItem}>
                            <Link
                                className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink}`}
                                to="/signup"
                            >
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
