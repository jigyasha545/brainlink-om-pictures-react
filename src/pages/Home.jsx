import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CounterSection from "../components/CounterSection";
import PortfolioSlider from "../components/PortfolioSlider";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <CounterSection />
            <PortfolioSlider />
            <ServicesSection />
            <WhyChooseUs />
            <PortfolioPreview />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;