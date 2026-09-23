function ContactUs() {
    return (
        <section className="contact-page">

            {/* Top section */}
            <div className="contact-hero">

                <div className="contact-hero-text">

                    <h1>
                        BECOME PART<br />
                        OF THE XVII<br />
                        FAMILY
                    </h1>
                </div>

                <div className="contact-hero-image">
                    <img
                        src="/images/group photo.jpeg"
                        alt="Scout members"
                    />
                </div>

            </div>


            {/* Contact information */}
            <div className="contact-information">

                <h2>Contact us</h2>

                <div className="contact-grid">

                    <div className="contact-item">
                        <h3>Phone</h3>
                        <a href="tel:+20 1203777497">
                            +20 1203777497
                        </a>
                    </div>



                    <div className="contact-item">
                        <h3>Instagram</h3>
                        <a
                            href="https://www.instagram.com/sgwen_xvii?stkn=ZXp6YmY3anN4bmdy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sgwen_xvii
                        </a>
                    </div>
                    <div className="contact-item">
                        <h3>Facebook</h3>
                        <a
                            href="https://www.facebook.com/share/1JS7GpiCDP/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            XVII Cairo Scout
                        </a>
                    </div>

                    <div className="contact-item">
                        <h3>Location</h3>
                        <a
                            href="https://maps.app.goo.gl/Ph4DChMv2JTetMRZ6?g_st=ipc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            St Rita
                        </a>
                    </div>

                    

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>your@email.com</p>
                    </div>

                    

                </div>

            </div>

        </section>
    );
}

export default ContactUs;