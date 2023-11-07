import { useAuth } from "../context/AuthContext";
import AuthItem from "./AuthItem";

function AuthContainer() {
    const { isAuthenticated, logout, user } = useAuth();

    const localUser = JSON.parse(localStorage.getItem("user"));
    const userRoleName = localUser?.roles[0]?.name || user?.roles[0]?.name;
    const username = localUser?.username || user?.username;

    return (
        <ul className="sm:flex">
            {user ? (
                isAuthenticated ? (
                    userRoleName === "admin" ? (
                        <>
                            <AuthItem
                                classes="bg-whtBg hover:bg-whtHvr"
                                label="Add Product"
                                to="/add-product"
                            />

                            <AuthItem
                                classes="text-gryTxt border border-gryBd hover:bg-gryHvr"
                                label="Exit"
                                to="/"
                                onClick={() => logout()}
                            />
                        </>
                    ) : (
                        <>
                            <AuthItem
                                classes="text-whtTxt bg-bluBg cursor-default"
                                label={`Welcome ${username}`}
                                to="/signin"
                            />

                            <AuthItem
                                classes="text-gryTxt border border-gryBd hover:bg-gryHvr"
                                label="Exit"
                                to="/"
                                onClick={() => logout()}
                            />
                        </>
                    )
                ) : (
                    <>
                        <AuthItem
                            classes="text-orgTxt bg-orgBg cursor-default"
                            label={`Welcome ${username}`}
                            to="/signin"
                        />

                        <AuthItem
                            classes="text-gryTxt border border-gryBd hover:bg-gryHvr"
                            label="Exit"
                            to="/"
                            onClick={() => logout()}
                        />
                    </>
                )
            ) : (
                <>
                    <AuthItem
                        classes="text-blkTxt bg-whtBg hover:bg-whtHvr"
                        label="Sign In"
                        to="/signin"
                    />
                    <AuthItem
                        classes="text-gryTxt border border-gryBd hover:bg-gryHvr"
                        label="Sign Up"
                        to="/signup"
                    />
                </>
            )}
        </ul>
    );
}

export default AuthContainer;
