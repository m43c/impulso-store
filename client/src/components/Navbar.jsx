import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBars } from "react-icons/fa6";
import MenuItem from "../components/MenuItem";
import AuthItem from "../components/AuthItem";
import styles from "./Navbar.module.css";

function Navbar() {
    const { user, isAuthenticated, profile, logout } = useAuth();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    useEffect(() => {
        profile();
    }, []);

    return (
        <nav className={styles.mainContainer}>
            <Link className={styles.logo} to="/">
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
                    <MenuItem label="Home" to="/" />
                    <MenuItem label="Products" to="/Products" />
                    <MenuItem label="Blog" to="/" />
                    <MenuItem label="Contact" to="/" />
                </ul>

                <div className={styles.authContainer}>
                    <ul
                        className={`${styles.itemsList} ${styles.secondListItems}`}
                    >
                        {user ? (
                            isAuthenticated ? (
                                user.roles[0].name === "admin" ? (
                                    <>
                                        <AuthItem
                                            label="Add Product"
                                            to="/add-product"
                                            isAdmin={true}
                                        />
                                        <AuthItem
                                            label="Exit"
                                            to="/"
                                            onClick={() => logout()}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <AuthItem
                                            label={`Welcome ${user.username}`}
                                            isNormalUser={true}
                                        />

                                        <AuthItem
                                            label="Exit"
                                            to="/"
                                            onClick={() => logout()}
                                        />
                                    </>
                                )
                            ) : (
                                <>
                                    <AuthItem
                                        label={`Welcome ${user.username}`}
                                        isNormalUser={true}
                                    />

                                    <AuthItem
                                        label="Exit"
                                        to="/"
                                        onClick={() => logout()}
                                    />
                                </>
                            )
                        ) : (
                            <>
                                <AuthItem label="Sign in" to="/signin" />
                                <AuthItem label="Sign up" to="/signup" />
                            </>
                        )}
                    </ul>
                </div>
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
