function PortfolioPreview() {
    return (
        <section className="portfolio">
            <h2>Our Portfolio</h2>
            <p>Take a look at some of our beautiful work.</p>

            <div className="portfolio-container">
                <div className="portfolio-card">
                    <img
                        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
                        alt="Wedding"
                    />
                    <h3>Wedding</h3>
                </div>
                <div className="portfolio-card">
                    <img
                        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
                        alt="Pre Wedding"
                    />
                    <h3>Pre-Wedding</h3>
                </div>

                <div className="portfolio-card">
                    <img
                        src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80"
                        alt="Cinematic"
                    />
                    <h3>Cinematic Films</h3>
                </div>

                <div className="portfolio-card">
                    <img
                        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
                        alt="Drone"
                    />
                    <h3>Drone Shoots</h3>
                </div>
            </div>

            <button className="primary-btn">View Full Portfolio</button>
        </section>
    );
}

export default PortfolioPreview;