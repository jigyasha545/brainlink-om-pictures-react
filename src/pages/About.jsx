import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar />

            <section className="about">
                <h1>About OM Pictures</h1>
                <img
                    className="about-image"
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Wedding Photography"
                />

                <p>
                    OM Pictures is a premium wedding photography and cinematic videography
                    studio dedicated to capturing life's most beautiful moments.
                </p>

                <p>
                    From weddings and pre-wedding shoots to drone photography and cinematic
                    films, we transform your memories into timeless stories.
                </p>
                <div className="about-stats">
                    <div className="stat-box">
                        <h2>500+</h2>
                        <p>Weddings Covered</p>
                    </div>

                    <div className="stat-box">
                        <h2>8+</h2>
                        <p>Years Experience</p>
                    </div>

                    <div className="stat-box">
                        <h2>1000+</h2>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default About;