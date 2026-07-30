import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Portfolio() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
        },
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        },
    ];

    return (
        <>
            <Navbar />

            <section className="portfolio-page" data-aos="fade-up">
                <h1>Our Portfolio</h1>

                <p>
                    A glimpse of our finest wedding photography and cinematic moments.
                </p>

                <div className="portfolio-grid">

                    <div
                        className="portfolio-item"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        onClick={() => {
                            setIndex(0);
                            setOpen(true);
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80"
                            alt="Wedding"
                        />
                        <h3>Wedding</h3>
                    </div>

                    <div
                        className="portfolio-item"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        onClick={() => {
                            setIndex(1);
                            setOpen(true);
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=80"
                            alt="Pre Wedding"
                        />
                        <h3>Pre-Wedding</h3>
                    </div>

                    <div
                        className="portfolio-item"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                        onClick={() => {
                            setIndex(2);
                            setOpen(true);
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=700&q=80"
                            alt="Cinematic"
                        />
                        <h3>Cinematic Films</h3>
                    </div>

                    <div
                        className="portfolio-item"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        onClick={() => {
                            setIndex(3);
                            setOpen(true);
                        }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80"
                            alt="Drone"
                        />
                        <h3>Drone Shoots</h3>
                    </div>

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
                        alt=""
                        className="lightbox-img"
                    />

                    <span
                        className="next-btn"
                        onClick={() =>
                            setIndex((index + 1) % images.length)
                        }
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