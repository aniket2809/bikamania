import React from "react";
import Navbar from "./Navbar.jsx";
import AboutusImg from "../assets/AboutusPage.mp4";
import AboutusThumbnail from "../assets/AboutusPageThumbnail.png";
import Aboutus from "../assets/AboutusText.png";
import Footer from "./Footer.jsx";

const AboutusPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <video
          className="w-[100vw] h-[50vh] sm:h-[80vh] object-fill"
          src={AboutusImg}
          autoPlay
          loop
          muted
          playsInline
          poster={AboutusThumbnail}
        />
        <img
          src={Aboutus}
          className="animate-fade-in delay-100 absolute top-[40%] sm:top-2/3 left-1/4 transform -translate-y-1/2 w-1/2"
          alt="About us Text"
        />
      </div>
      <div className="m-5">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Story Section */}
          <div
            style={{ backgroundColor: "#D9D9D9" }}
            className="p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-4">OUR STORY</h3>
            <p className="text">
              Welcome to our Dog Creche, a home away from home for your beloved
              pets! Here, we provide a safe, fun, and nurturing environment
              where dogs can socialize, play, and relax. Our dedicated
              organizations ensure every dog receives personalized care,
              attention, and plenty of exercise.
            </p>
            <p className="mt-4">
              Whether it's for a day or an extended stay, we treat your furry
              friends like family, giving them the love and care they deserve.
              Join our community and let your dog enjoy the best creche
              experience!
            </p>
          </div>

          {/* Facility Section */}
          <div
            style={{ backgroundColor: "#D9D9D9" }}
            className="p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-4">OUR FACILITY</h3>
            <p>
              Our state-of-the-art facility features spacious play areas, cozy
              resting spots, and plenty of opportunities for socialization and
              exercise. Safety is paramount; our premises are secure,
              meticulously clean, and equipped with advanced monitoring systems
              to ensure your pet's safety.
            </p>
            <p className="mt-4">
              We also offer online doctor consultations and medicine services to
              ensure your pet receives the best care at all times.
            </p>
          </div>

          {/* Commitment Section */}
          <div
            style={{ backgroundColor: "#D9D9D9" }}
            className="p-8 rounded-xl text-center shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-4">OUR COMMITMENT</h3>
            <p>
              At PupHub, we believe in building strong relationships with both
              our furry guests and their owners. We provide transparent
              communication, keeping you connected with your pet's experiences
              through daily updates and photos.
            </p>
            <p className="mt-4">
              Our commitment is to make sure your pet feels loved and cared for;
              just like at home.
            </p>
          </div>
        </section>

        <section className="text-center mt-16">
          <p className="text-xl text-white">
            Join the PupHub family today and give your pet the best care they
            deserve. We look forward to welcome you and your beloved pet to our
            creche soon!
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutusPage;
