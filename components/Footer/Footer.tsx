import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <img src="/logo.png" alt="Hi Koraput" />
                    <p>
                        Hi Koraput Hospitality Pvt. Ltd.
                        <br />
                        Your trusted local partner for exploring the hidden beauty
                        of Koraput, Odisha.
                    </p>
                </div>

                <div className="footer__links">
                    <h3>Quick Links</h3>
                    <Link href="/tours">Koraput Tour Packages</Link>
                    <Link href="/about">Koraput Tourism Guide</Link>
                    <Link href="/contact">Koraput Tour Plan</Link>
                    <Link href="/tours">Camping in Koraput</Link>
                    <Link href="/about">Places to Visit in Koraput</Link>
                    <Link href="/about">Blog</Link>
                </div>

                <div className="footer__links">
                    <h3>Support</h3>
                    <Link href="/about">About Us</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/contact">Terms & Conditions</Link>
                    <Link href="/contact">Privacy Policy</Link>
                    <Link href="/contact">Cancellation Policy</Link>
                    <Link href="/contact">FAQ</Link>
                </div>

                <div className="footer__links">
                    <h3>Contact Us</h3>
                    <a href="mailto:info@hikoraput.com">info@hikoraput.com</a>
                    <a href="tel:09686848817">09686848817</a>
                    <p>Koraput, Odisha, India</p>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p>© 2024 Hi Koraput Hospitality Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
