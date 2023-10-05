import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.containerFooter}>
                <span className={styles.containerAuthor}>
                    Created by Marco Encinas
                </span>
                <ul className={styles.containerSocialNetwork}>
                    <li className={styles.containerSocialNetworkItem}>
                        <a
                            className={styles.containerSocialNetworkLink}
                            href="#"
                        >
                            Facebook
                        </a>
                    </li>
                    <li className={styles.containerSocialNetworkItem}>
                        <a
                            className={styles.containerSocialNetworkLink}
                            href="#"
                        >
                            Whatsapp
                        </a>
                    </li>
                    <li className={styles.containerSocialNetworkItem}>
                        <a
                            className={styles.containerSocialNetworkLink}
                            href="#"
                        >
                            Github
                        </a>
                    </li>
                    <li className={styles.containerSocialNetworkItem}>
                        <a
                            className={styles.containerSocialNetworkLink}
                            href="#"
                        >
                            Twitter
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
