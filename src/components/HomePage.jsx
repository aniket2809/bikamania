import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HomeVideo from "../assets/HomePage.mp4";
import HomeThumbnail from "../assets/HomePageThumbnail.png";
import HomeText1 from "../assets/WelcomeText.png";
import HomeText2 from "../assets/PupHubText.png";
import Client1 from "../assets/PhotoFrame1.png";
import Client2 from "../assets/PhotoFrame2.png";
import Client3 from "../assets/PhotoFrame3.png";
import Client4 from "../assets/PhotoFrame4.png";
import Footer from "./Footer.jsx";

const reviews = [
  {
    id: 1,
    name: "Jane Brown",
    role: "App Tester.",
    message:
      "As a tester, I found PupHub to be the best creche app. The list of creches in a particular location was particularly helpful. Overall, it's a solid app with room for improvement.",
    image: Client1,
  },
  {
    id: 2,
    name: "David Lee",
    role: "App Testers",
    message:
      "As a tester, I found PupHub to be the best creche app. Overall, it's a solid app with room for improvement.",
    image: Client2,
  },
  {
    id: 3,
    name: "Rahul Tiwary",
    role: "App User",
    message:
      "As a user, I found PupHub to be the best creche app. The list of creches in a particular location was particularly helpful.",
    image: Client3,
  },
  {
    id: 4,
    name: "Palvir Singh",
    role: "App User",
    message:
      "As a user, I found Puphub very useful and user convinient to use.",
    image: Client4,
  },
];
const HomePage = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change card every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentReview = reviews[currentReviewIndex];
  return (
    <>
      <Navbar />
      <div>
        <video
          className="w-full h-[50vh] sm:h-[80vh] object-fill"
          src={HomeVideo}
          autoPlay
          loop
          muted
          playsInline
          poster={HomeThumbnail}
        />
        <img
          src={HomeText1}
          className="w-1/2 animate-fade-in delay-100 absolute  top-[20%] sm:top-[25%] left-1/4 transform -translate-y-1/2"
          alt="Welcome Text"
        />
        <img
          src={HomeText2}
          className="animate-fade-in-slow delay-100 absolute top-[30%] sm:top-[55%] left-1/4 transform  -translate-y-1/2 w-1/2"
          alt="Puphub Text"
        />
      </div>
      <div className="flex justify-center">
        <p className=" text-center sm:text-justify text-2xl max-w-4xl mb-10 text-white mt-10 m-5 ">
          Welcome to PupHub, where your pet's happiness and well-being are our
          top priorities! We understand that pets are cherished family members,
          and our mission is to provide them with a safe, loving, and
          stimulating environment while you're away.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center m-10 ">
        <div
          style={{ backgroundColor: "#D9D9D9" }}
          className="shadow-lg rounded-3xl p-6 flex flex-col md:flex-row items-center w-full max-w-3xl"
        >
          {/* Left Side: Rounded Photo */}
          <div className="mb-4 md:mb-16 md:mr-6 flex-shrink-0">
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>
          {/* Right Side: Message */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-base md:text-lg lg:text-xl italic mb-4">
              "{currentReview.message}"
            </p>
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-right">
                {currentReview.name}
              </h3>
              <p className="text-sm md:text-base text-grey-500 text-right">
                {currentReview.role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
