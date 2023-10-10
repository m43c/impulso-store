import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";
import { profileRequest } from "../api/auth";
import { useEffect, useState } from "react";

function Navbar() {
    const { user, isAuthenticated, logout } = useAuth();
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await profileRequest();
                setData(res.data);
            } catch (error) {
                console.log(error.response.data);
            }
        }

        getData();
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

            {user || isAuthenticated ? (
                user.roles[0].name === "admin" ||
                data.roles[0].name === "admin" ? (
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
