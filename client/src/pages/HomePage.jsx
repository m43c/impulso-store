import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./HomePage.module.css";

function HomePage() {
    const { isLogged } = useAuth();

    useEffect(() => {
        if (isLogged) {
            window.location.reload();
            return;
        }
    });

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.title}>Home Page</h1>
        </div>
    );
}

export default HomePage;
