import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.mainContainer}>
            <section className={styles.welcomeContainer}>
                <article
                    className={`${styles.article} ${styles.welcomeArticle}`}
                >
                    <p
                        className={`${styles.paragraph} ${styles.welcomeParagraph}`}
                    >
                        Welcome to IMPULSO, your online fashion showcase where
                        elegance and style are just a click away! At IMPULSO, we
                        invite you to explore our extensive catalog of
                        high-quality clothing and exceptional fashion
                        accessories. Here, fashion comes to life, and innovation
                        blends with elegance. You can browse through our
                        carefully curated collections and discover the latest
                        trends for men, women, and children.
                    </p>
                    <img
                        src="https://robohash.org/robot1"
                        alt=""
                        className={`${styles.image} ${styles.welcomeImage}`}
                    />
                </article>

                <article
                    className={`${styles.article} ${styles.welcomeArticle}`}
                >
                    <p
                        className={`${styles.paragraph} ${styles.welcomeParagraph}`}
                    >
                        In IMPULSO, we not only offer you a shopping experience
                        but also a source of inspiration. Feel free to explore
                        our products and place orders to receive them in the
                        comfort of your home. Fashion has never been so
                        accessible and exciting. Join the fashion revolution at
                        IMPULSO and discover a world of style and
                        sophistication!
                    </p>
                    <img
                        src="https://robohash.org/robot2"
                        alt=""
                        className={`${styles.image} ${styles.welcomeImage}`}
                    />
                </article>
            </section>

            <aside className={styles.informationContainer}>
                <article
                    className={`${styles.article} ${styles.informationArticle}`}
                >
                    <p
                        className={`${styles.paragraph} ${styles.informationParagraph}`}
                    >
                        Discover the best promotions and deals at IMPULSO. We
                        constantly update our product selection with seasonal
                        discounts and exclusive offers. Find the hottest trends
                        at incredible prices. At IMPULSO, affordable,
                        high-quality fashion merges with elegance. Don't miss
                        out on our promotions and discounts. Explore our offers
                        today and elevate your style with IMPULSO! Sign up now
                        to receive these offers directly in your inbox and stay
                        up to date with the latest fashion trends.
                    </p>
                    <img
                        src="https://robohash.org/robot3"
                        alt=""
                        className={`${styles.image} ${styles.informationImage}`}
                    />
                    <img
                        src="https://robohash.org/robot4"
                        alt=""
                        className={`${styles.image} ${styles.informationImage}`}
                    />
                </article>
            </aside>
            <div className={styles.locationContainer}>
                <article
                    className={`${styles.article} ${styles.locationArticle}`}
                >
                    <p
                        className={`${styles.paragraph} ${styles.locationParagraph}`}
                    >
                        Our IMPULSO store is located in the city center on Sucre
                        Street, situated between Santa Cruz and Comercio
                        Streets. We are just a few steps away from the popular
                        restaurant La Pianola. This strategic location provides
                        you with the convenience of accessing the latest in
                        fashion and style right in the heart of the city. With
                        renowned restaurants and a vibrant urban life
                        surrounding us, visiting IMPULSO is an experience that
                        combines elegance with convenience. We look forward to
                        welcoming you in the heart of the action on Sucre
                        Street!
                    </p>
                    <img
                        src="https://robohash.org/robot5"
                        alt=""
                        className={`${styles.image} ${styles.locationImage}`}
                    />
                </article>
            </div>
        </div>
    );
}

export default HomePage;
