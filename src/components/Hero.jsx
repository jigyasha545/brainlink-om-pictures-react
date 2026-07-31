import heroVideo from "../assets/videos/hero-video.mp4";

function Hero() {
    return (
        <section className="hero">

            {/* Background Video */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>

            {/* Golden Particles */}
            <div className="particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Hero Content */}
            <div className="hero-content">

                <h1 className="hero-title">
                    Capture Your <span>Forever</span> Moments
                </h1>

                <p className="hero-subtitle">
                    Premium Wedding Photography • Pre-Wedding • Cinematic Films • Drone Shoots
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">
                        Book a Shoot
                    </button>

                    <button className="secondary-btn">
                        View Portfolio
                    </button>
                </div>

            </div>

        </section>
    );
}

export default Hero;