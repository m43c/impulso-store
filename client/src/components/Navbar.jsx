import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, user } = useAuth();

    console.log(user);

    return (
        <div className={styles.container}>
            <nav className={styles.containerNav}>
                <ul className={styles.containerMenu}>
                    <li className={styles.containerMenuItem}>
                        <Link
                            className={`${styles.containerMenuItemLink} ${styles.containerMenuItemLinkTitle}`}
                            to="/"
                        >
                            Impulso
                        </Link>
                    </li>
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
                {isAuthenticated ? (
                    <>
                        <div className={styles.containerAuth}>
                            <ul className={styles.containerMenu}>
                                <li className={styles.containerMenuItem}>
                                    Welcome User
                                </li>
                                <li className={styles.containerMenuItem}>
                                    <Link
                                        className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink} ${styles.containerMenuAddProduct}`}
                                        to="/"
                                    >
                                        Add Product
                                    </Link>
                                </li>
                                <li className={styles.containerMenuItem}>
                                    <Link
                                        className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink}`}
                                        to="/"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
