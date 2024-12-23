import React from "react";
import Navbar from "./Navbar.jsx";
import GalleryVideo from "../assets/GalleryPage.mp4";
import GalleryThumbnail from "../assets/GalleryPageThumbnail.png"
import Gallery from "../assets/GalleryText.png";
import pic1 from "../assets/img_1.png";
import pic2 from "../assets/img_2.png";
import pic3 from "../assets/img_3.png";
import Footer from "./Footer.jsx";

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <video
          className="w-[100vw] h-[50vh] sm:h-[80vh] object-fill"
          src={GalleryVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={GalleryThumbnail}
        />
        <img
          src={Gallery}
          className="animate-fade-in delay-100 absolute top-[40%] sm:top-2/3 left-1/4 transform- translate-x-1/3 -translate-y-1/2 w-1/3"
          alt="Gallery Text"
        />
      </div>

      <div className="m-5">
        <p className="flex text-3xl text-white m-5 justify-center items-center font-DancingScript text-center">A collection of captivating images that tell a story</p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic1}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic2}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic3}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic3}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic2}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic1}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic2}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic3}
            alt="Gallery"
          />
          <img
            className="rounded-2xl duration-300 hover:scale-105"
            src={pic1}
            alt="Gallery"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
