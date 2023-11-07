function HomePage() {
    return (
        <main className="main main-md lg:px-12">
            <section className="main-container [grid-area:welcome]">
                <article className="main-article">
                    <h1 className="font-semibold text-3xl text-whtTxt">
                        Welcome to IMPULSO: Your Online Destination for Fashion
                        and Elegance
                    </h1>

                    <p className="lg:text-xl">
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
                        src="https://robohash.org/cat1?set=set4"
                        alt="cat 1"
                        className="inline-block"
                    />
                </article>

                <article className="main-article">
                    <p className="my-auto lg:text-xl">
                        In IMPULSO, we not only offer you a shopping experience
                        but also a source of inspiration. Feel free to explore
                        our products and place orders to receive them in the
                        comfort of your home. Fashion has never been so
                        accessible and exciting. Join the fashion revolution at
                        IMPULSO and discover a world of style and
                        sophistication!
                    </p>

                    <div className="main-container">
                        <img
                            src="https://robohash.org/cat2?set=set4"
                            alt="cat 2"
                            className="inline-block"
                        />

                        <img
                            src="https://robohash.org/cat3?set=set4"
                            alt="cat 3"
                            className="inline-block md:hidden"
                        />

                        <img
                            src="https://robohash.org/cat4?set=set4"
                            alt="cat 4"
                            className="inline-block md:hidden"
                        />
                    </div>
                </article>
            </section>

            <aside className="[grid-area:info] space-y-2 text-center md:space-y-2 md:text-center">
                <h1 className="font-semibold text-3xl text-whtTxt">
                    Unveil the Best Promotions and Deals at IMPULSO: Elevate
                    Your Style and Savings!
                </h1>

                <article className="main-article">
                    <p className="lg:text-xl">
                        Discover the best promotions and deals at IMPULSO. We
                        constantly update our product selection with seasonal
                        discounts and exclusive offers. Find the hottest trends
                        at incredible prices. At IMPULSO, affordable,
                        high-quality fashion merges with elegance.
                    </p>

                    <img
                        src="https://robohash.org/cat5?set=set4"
                        alt="cat 5"
                        className="inline-block"
                    />
                </article>

                <article className="main-article">
                    <p className="lg:text-xl">
                        Don't miss out on our promotions and discounts. Explore
                        our offers today and elevate your style with IMPULSO!
                        Sign up now to receive these offers directly in your
                        inbox and stay up to date with the latest fashion
                        trends.
                    </p>

                    <img
                        src="https://robohash.org/cat6?set=set4"
                        alt="cat 6"
                        className="inline-block"
                    />
                </article>
            </aside>

            <div className="[grid-area:location]">
                <article className="main-article text-center">
                    <p className="lg:text-xl">
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
                        src="https://robohash.org/cat7?set=set4"
                        alt="cat 7"
                        className="inline-block"
                    />
                </article>
            </div>
        </main>
    );
}

export default HomePage;
