import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.mainContainer}>
            <span className={styles.containerAuthor}>
                Created by Marco Encinas
            </span>
            <ul className={styles.contactContainer}>
                <li className={styles.contactItem}>
                    <a className={styles.contactLink} href="#">
                        Facebook
                    </a>
                </li>
                <li className={styles.contactItem}>
                    <a className={styles.contactLink} href="#">
                        Whatsapp
                    </a>
                </li>
                <li className={styles.contactItem}>
                    <a className={styles.contactLink} href="#">
                        Github
                    </a>
                </li>
                <li className={styles.contactItem}>
                    <a className={styles.contactLink} href="#">
                        Twitter
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
