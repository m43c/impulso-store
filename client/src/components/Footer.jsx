import { FaGithub, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa6";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.mainContainer}>
            <div className={styles.contactsContainer}>
                <ul className={styles.contactItems}>
                    <li className={styles.contactItem}>
                        <a
                            className={styles.contactLink}
                            href="https://github.com/m43c"
                            target="_blanck"
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li className={styles.contactItem}>
                        <a className={styles.contactLink} href="#">
                            <FaWhatsapp />
                        </a>
                    </li>
                    <li className={styles.contactItem}>
                        <a className={styles.contactLink} href="#">
                            <FaFacebook />
                        </a>
                    </li>
                    <li className={styles.contactItem}>
                        <a className={styles.contactLink} href="#">
                            <FaTwitter />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.rightsContainer}>
                <span className={styles.rights}>
                    <i className="fa-regular fa-copyright"></i>
                    2023 Marco Encinas - All rights reserved
                </span>
            </div>
        </footer>
    );
}

export default Footer;
