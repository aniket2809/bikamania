import React from "react";
import Navbar from "./Navbar.jsx";
import ContactusVideo from "../assets/ContactusPage.mp4";
import ContactusThumbnail from "../assets/ContactusPageThumbnail.png";
import Contactus from "../assets/ContactusText.png";
import Dialer from "../assets/dialer.png";
import Mail from "../assets/mail.png";
import YouTube from "../assets/Youtube.png";
import Facebook from "../assets/Facebook.png";
import Linkedin from "../assets/Linkedin.png";
import QRCode from "../assets/Puphub_QR_Code.png";
import googleplay from "../assets/google-play.svg";
import Footer from "./Footer.jsx";

const ContactusPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <video
          className="w-[100vw] h-[50vh] sm:h-[80vh] object-fill"
          src={ContactusVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={ContactusThumbnail}
        />
        <img
          src={Contactus}
          className="animate-fade-in delay-100 absolute top-1/3 sm:top-1/2 left-1/4 transform -translate-y-1/2 w-1/2"
          alt="About us Text"
        />
      </div>
      <div>
        {/* Contact Information */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 text-white">
          {/* Get in Touch Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-lg">Phone Number</p>
            <a href="tel:+918918080399">
              <img
                className="inline-block w-8 h-8 m-1 transform hover:scale-110 active:scale-90 transition-transform duration-200"
                src={Dialer}
                alt=""
              />
            </a>
            +91 8918080399
            <p className="text-lg">Email Address</p>
            <a href="mailto:apexiumtechnologies@gmail.com">
              <img
                className="inline-block w-8 h-8 m-1 transform hover:scale-110 active:scale-90 transition-transform duration-200"
                src={Mail}
                alt=""
              />
            </a>
            apexiumtechnologies@gmail.com
          </div>

          {/* Address Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">Where we are</h3>
            <p className="text-lg">Address</p>
            <p className="mb-2">
              1ST FLOOR, BE 125, AA-1, ST NO 163 &amp; 174, New Town, Kolkata, West Bengal, Pin-700156.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9393517362187!2d88.46856207475739!3d22.581371532649854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027500758a8955%3A0xdf27b61f3189d55f!2sApexium%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727783316967!5m2!1sen!2sin"
              title ="Apexium Location"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="mb-10 sm:w-4/5 h-3/5"
            ></iframe>
          </div>

          {/* Social Media Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-4">
              Follow us on Social Media
            </h3>
            <div className="flex justify-center lg:justify-start space-x-10 sm:space-x-20">
              <a href="https://youtube.com/@puphub24" target="blank">
                <img src={YouTube} alt="YouTube" className="h-12" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560652664233"
                target="blank"
              >
                <img src={Facebook} alt="Facebook" className="h-12" />
              </a>
              <a
                href="https://www.linkedin.com/company/103064496/admin/dashboard/"
                target="blank"
              >
                <img src={Linkedin} alt="LinkedIn" className="h-12" />
              </a>
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="hidden sm:flex text-center py-16">
          <div className="flex">
            <img src={QRCode} alt="QR Code" className="h-40 w-40 ml-10" />
            <p className="flex items-center text-2xl font-bold mt-4 text-white m-10 ">
              Scan to Download the App
            </p>
          </div>
        </section>
        {/* Playstore Link */}
        <section className="sm:hidden">
          <div className="flex justify-center lg:justify-start space-x-5 sm:space-x-20">
            <a
              href="https://play.google.com/store/apps/details?id=com.puphub"
              target="blank"
            >
              <img src={googleplay} alt="QR Code" className="h-10 w-10 ml-1" />
            </a>
            <p className="text-sm font-bold mt-2 text-white">
              Download Android App here
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactusPage;
