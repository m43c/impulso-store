import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

function Navbar() {
    const { user, isAuthenticated, profile, logout } = useAuth();

    useEffect(() => {
        profile();
    }, []);

    return (
        <nav className={styles.mainContainer}>
            <ul className={styles.menuContainer}>
                <li className={styles.menuItem}>
                    <Link
                        className={`${styles.menuLink} ${styles.menuLogo}`}
                        to="/"
                    >
                        IMPULSO
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">
                        Home
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">
                        Category
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">
                        Blog
                    </Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">
                        Contact
                    </Link>
                </li>
            </ul>

            {user ? (
                isAuthenticated ? (
                    user.roles[0].name === "admin" ? (
                        <>
                            <div className={styles.authContainer}>
                                <ul className={styles.menuContainer}>
                                    <li className={styles.menuItem}>
                                        <Link
                                            className={`${styles.menuLink} ${styles.authLink} ${styles.addProductLink}`}
                                            to="/add-product"
                                        >
                                            Add Product
                                        </Link>
                                    </li>
                                    <li className={styles.menuItem}>
                                        <Link
                                            className={`${styles.menuLink} ${styles.authLink}`}
                                            to="/"
                                            onClick={() => {
                                                logout();
                                            }}
                                        >
                                            Exit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.authContainer}>
                                <ul className={styles.menuContainer}>
                                    <li className={styles.menuItem}>
                                        Welcome {user.username}
                                    </li>
                                    <li className={styles.menuItem}>
                                        <Link
                                            className={`${styles.menuLink} ${styles.authLink}`}
                                            to="/"
                                            onClick={() => {
                                                logout();
                                            }}
                                        >
                                            Exit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <div className={styles.authContainer}>
                            <ul className={styles.menuContainer}>
                                <li className={styles.menuItem}>
                                    Welcome {user.username}
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={`${styles.menuLink} ${styles.authLink}`}
                                        to="/"
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        Exit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )
            ) : (
                <>
                    <div className={styles.authContainer}>
                        <ul className={styles.menuContainer}>
                            <li className={styles.menuItem}>
                                <Link
                                    className={`${styles.menuLink} ${styles.authLink}`}
                                    to="/signin"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li className={styles.menuItem}>
                                <Link
                                    className={`${styles.menuLink} ${styles.authLink}`}
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
    );
}

export default Navbar;
