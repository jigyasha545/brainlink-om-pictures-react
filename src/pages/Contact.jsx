import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_q9do9a6",
            "template_31bluyl",
            form.current,
            "6h1uD26qz9mm5r_uQ"
        )
            .then(
                () => {
                    alert("Message Sent Successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message!");
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Navbar />

            <section className="contact-page">
                <h1>Contact Us</h1>
                <p>Let's discuss your dream wedding shoot.</p>

                <div className="contact-container">

                    <div className="contact-info">
                        <h2>Get in Touch</h2>

                        <p>📞 +91 98765 43210</p>
                        <p>📧 info@ompictures.com</p>
                        <p>📍 Jaipur, Rajasthan</p>
                    </div>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact-form"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            required
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Contact;