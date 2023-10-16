import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
    const { user, isAuthenticated, profile, logout } = useAuth();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        profile();
    }, []);

    return (
        <nav className={styles.mainContainer}>
            <Link className={`${styles.link} ${styles.logo}`} to="/">
                IMPULSO
            </Link>

            <div
                className={
                    isMenuVisible
                        ? `${styles.menuContainer} ${styles.visibleMenuContainer}`
                        : styles.menuContainer
                }
            >
                <ul className={`${styles.itemsList} ${styles.firstListItems}`}>
                    <li className={`${styles.item} ${styles.menuItem}`}>
                        <Link
                            className={`${styles.link} ${styles.menuLink}`}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li className={`${styles.item} ${styles.menuItem}`}>
                        <Link
                            className={`${styles.link} ${styles.menuLink}`}
                            to="/"
                        >
                            Category
                        </Link>
                    </li>

                    <li className={`${styles.item} ${styles.menuItem}`}>
                        <Link
                            className={`${styles.link} ${styles.menuLink}`}
                            to="/"
                        >
                            Blog
                        </Link>
                    </li>

                    <li className={`${styles.item} ${styles.menuItem}`}>
                        <Link
                            className={`${styles.link} ${styles.menuLink}`}
                            to="/"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {user ? (
                    isAuthenticated ? (
                        user.roles[0].name === "admin" ? (
                            <>
                                <div className={styles.authContainer}>
                                    <ul
                                        className={`${styles.itemsList} ${styles.secondListItems}`}
                                    >
                                        <li
                                            className={`${styles.item} ${styles.authItem} ${styles.addProductLink}`}
                                        >
                                            <Link
                                                className={`${styles.link} ${styles.authLink}`}
                                                to="/add-product"
                                            >
                                                Add Product
                                            </Link>
                                        </li>

                                        <li
                                            className={`${styles.item} ${styles.authItem}`}
                                        >
                                            <Link
                                                className={`${styles.link} ${styles.authLink}`}
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
                                    <ul
                                        className={`${styles.itemsList} ${styles.secondListItems}`}
                                    >
                                        <li
                                            className={`${styles.item} ${styles.authWelcomeItem}`}
                                        >
                                            Welcome {user.username}
                                        </li>

                                        <li
                                            className={`${styles.item} ${styles.authItem}`}
                                        >
                                            <Link
                                                className={`${styles.link} ${styles.authLink}`}
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
                                <ul
                                    className={`${styles.itemsList} ${styles.secondListItems}`}
                                >
                                    <li
                                        className={`${styles.item} ${styles.authWelcomeItem}`}
                                    >
                                        Welcome {user.username}
                                    </li>

                                    <li
                                        className={`${styles.item} ${styles.authItem}`}
                                    >
                                        <Link
                                            className={`${styles.link} ${styles.authLink}`}
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
                            <ul
                                className={`${styles.itemsList} ${styles.secondListItems}`}
                            >
                                <li
                                    className={`${styles.item} ${styles.authItem}`}
                                >
                                    <Link
                                        className={`${styles.link} ${styles.authLink}`}
                                        to="/signin"
                                    >
                                        Sign in
                                    </Link>
                                </li>

                                <li
                                    className={`${styles.item} ${styles.authItem}`}
                                >
                                    <Link
                                        className={`${styles.link} ${styles.authLink}`}
                                        to="/signup"
                                    >
                                        Sign up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>

            <button
                className={styles.menuBtn}
                onClick={() => {
                    setIsMenuVisible(!isMenuVisible);
                }}
            >
                <FaBars className={styles.menuIcon} />
            </button>
        </nav>
    );
}

export default Navbar;
