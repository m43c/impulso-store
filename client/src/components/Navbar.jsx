import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MenuItem from "../components/MenuItem";
import AuthItem from "../components/AuthItem";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const localUser = JSON.parse(localStorage.getItem("user"));
    const userRoleName = localUser?.roles[0]?.name || user?.roles[0]?.name;
    const username = localUser?.username || user?.username;

    return (
        <header className="header md:px-8 lg:px-12">
            <Link className="text-4xl font-bold sm:text-3xl " to="/">
                IMPULSO
            </Link>

            <nav
                className={`nav ${
                    isMenuVisible ? "" : "sm:nav-sm translate-x-full"
                } lg:text-[16px]`}
            >
                <ul className="sm:flex">
                    <MenuItem label="Home" to="/" />
                    <MenuItem label="Products" to="/Products" />
                    <MenuItem label="Blog" to="/" />
                    <MenuItem label="Contact" to="/" />
                </ul>

                <ul className="sm:flex">
                    {user ? (
                        isAuthenticated ? (
                            userRoleName === "admin" ? (
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
                                        label={`Welcome ${username}`}
                                        to="/signin"
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
                                    label={`Welcome ${username}`}
                                    to="/signin"
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
            </nav>

            <button
                className="text-3xl"
                onClick={() => {
                    setIsMenuVisible(!isMenuVisible);
                }}
            >
                {isMenuVisible ? (
                    <IoClose className="text-4xl sm:hidden" />
                ) : (
                    <FaBars className="sm:hidden" />
                )}
            </button>
        </header>
    );
}

export default Navbar;
