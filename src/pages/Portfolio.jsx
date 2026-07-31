import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Portfolio() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [category, setCategory] = useState("All");

    const images = [
        {
            src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
            title: "Wedding",
            category: "Wedding",
        },
        {
            src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
            title: "Pre-Wedding",
            category: "Pre-Wedding",
        },
        {
            src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
            title: "Cinematic Films",
            category: "Cinematic",
        },
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
            title: "Drone Shoots",
            category: "Drone",
        },
    ];

    const filteredImages =
        category === "All"
            ? images
            : images.filter((item) => item.category === category);

    return (
        <>
            <Navbar />

            <section className="portfolio-page" data-aos="fade-up">
                <h1>Our Portfolio</h1>

                <p>
                    A glimpse of our finest wedding photography and cinematic moments.
                </p>

                <div className="portfolio-filter">
                    <button
                        className={category === "All" ? "active" : ""}
                        onClick={() => setCategory("All")}
                    >
                        All
                    </button>

                    <button
                        className={category === "Wedding" ? "active" : ""}
                        onClick={() => setCategory("Wedding")}
                    >
                        Wedding
                    </button>

                    <button
                        className={category === "Pre-Wedding" ? "active" : ""}
                        onClick={() => setCategory("Pre-Wedding")}
                    >
                        Pre-Wedding
                    </button>

                    <button
                        className={category === "Cinematic" ? "active" : ""}
                        onClick={() => setCategory("Cinematic")}
                    >
                        Cinematic
                    </button>

                    <button
                        className={category === "Drone" ? "active" : ""}
                        onClick={() => setCategory("Drone")}
                    >
                        Drone
                    </button>
                </div>

                <div className="portfolio-grid">
                    {filteredImages.map((item, i) => (
                        <div
                            key={i}
                            className="portfolio-item"
                            data-aos="zoom-in"
                            onClick={() => {
                                setIndex(images.indexOf(item));
                                setOpen(true);
                            }}
                        >
                            <img src={item.src} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            {open && (
                <div className="lightbox">
                    <span className="close-btn" onClick={() => setOpen(false)}>
                        ✕
                    </span>

                    <span
                        className="prev-btn"
                        onClick={() =>
                            setIndex((index - 1 + images.length) % images.length)
                        }
                    >
                        ❮
                    </span>

                    <img
                        src={images[index].src}
                        alt={images[index].title}
                        className="lightbox-img"
                    />

                    <span
                        className="next-btn"
                        onClick={() => setIndex((index + 1) % images.length)}
                    >
                        ❯
                    </span>
                </div>
            )}

            <Footer />
        </>
    );
}

export default Portfolio;