import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
    return (
        <>
            <Navbar />

            <section className="services" data-aos="fade-up">
                <h1>Our Services</h1>
                <p>We provide premium photography and videography services for every special occasion.</p>

                <div className="services-grid">

                    <div className="service-card" data-aos="zoom-in">
                        <h3>📸 Wedding Photography</h3>
                        <p>Capture every beautiful moment of your wedding.</p>
                    </div>

                    <div className="service-card" data-aos="zoom-in">
                        <h3>💍 Pre-Wedding Shoot</h3>
                        <p>Creative and romantic pre-wedding photography.</p>
                    </div>

                    <div className="service-card" data-aos="zoom-in">
                        <h3>🎥 Cinematic Videography</h3>
                        <p>High-quality cinematic wedding films.</p>
                    </div>

                    <div className="service-card" data-aos="zoom-in">
                        <h3>🚁 Drone Shoot</h3>
                        <p>Premium aerial photography and videography.</p>
                    </div>

                    <div className="service-card" data-aos="zoom-in">
                        <h3>📖 Wedding Albums</h3>
                        <p>Beautifully designed premium photo albums.</p>
                    </div>

                    <div className="service-card" data-aos="zoom-in">
                        <h3>📱 Reels & Video Editing</h3>
                        <p>Professional reels and social media edits.</p>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Services;
