import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <div className={styles.container}>
            <nav className={styles.containerNav}>
                <ul className={styles.containerMenu}>
                    <li className={styles.containerMenuItem}>
                        <Link
                            className={`${styles.containerMenuItemLink} ${styles.containerMenuItemLinkTitle}`}
                            to="/"
                        >
                            IMPULSO
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

                {user && isAuthenticated ? (
                    user.roles[0].name === "admin" ? (
                        <>
                            <div className={styles.containerAuth}>
                                <ul className={styles.containerMenu}>
                                    <li className={styles.containerMenuItem}>
                                        Welcome {user.username}
                                    </li>
                                    <li className={styles.containerMenuItem}>
                                        <Link
                                            className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink} ${styles.containerMenuAddProduct}`}
                                            to="/add-product"
                                        >
                                            Add Product
                                        </Link>
                                    </li>
                                    <li className={styles.containerMenuItem}>
                                        <Link
                                            className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink}`}
                                            to="/"
                                            onClick={() => {
                                                logout();
                                            }}
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
                                        Welcome {user.username}
                                    </li>
                                    <li className={styles.containerMenuItem}>
                                        <Link
                                            className={`${styles.containerMenuItemLink} ${styles.containerMenuAuthLink}`}
                                            to="/"
                                            onClick={() => {
                                                logout();
                                            }}
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )
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
