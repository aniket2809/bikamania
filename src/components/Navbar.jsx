// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/Logo_Web.png";
// import home from "../assets/home.svg";
// import aboutus from "../assets/about-us.svg";
// import gallery from "../assets/gallery.svg";
// import blogs from "../assets/blogs.svg"
// import FAQ from "../assets/FAQ.svg"
// import contacts from "../assets/contacts.svg";

// const Navbar = () => {
//   return (
//     <>
//       <div className="bg-white flex justify-between items-center px-5 md:px-8 drop-shadow-lg w-10/12 h-[7%] sm:w-8/12 sm:h-[10%] rounded-full fixed  top-2 sm:top-5 left-1/2 transform -translate-x-1/2 z-10">
//         <img className="hidden sm:flex xl:w-40 md:w-28" src={Logo} alt="Logo" />
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/"
//         >
//           Home
//         </Link>
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/aboutus"
//         >
//           About us
//         </Link>
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/gallery"
//         >
//           Gallery
//         </Link>
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/blogs"
//         >
//           Blogs
//         </Link>
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/FAQ"
//         >
//           FAQ
//         </Link>
//         <Link
//           className="hidden sm:flex text-sm 2xl:text-3xl font-ComicNeue"
//           to="/contactus"
//         >
//           Contact us
//         </Link>
//         <Link className="sm:hidden" to="/">
//           <img src={home} alt="" />
//         </Link>
//         <Link className="sm:hidden" to="/aboutus">
//           <img src={aboutus} alt="" />
//         </Link>
//         <Link className="sm:hidden" to="/gallery">
//           <img src={gallery} alt="" />
//         </Link>
//         <Link className="sm:hidden" to="/blogs">
//           <img src={blogs} alt="" />
//         </Link>
//         <Link className="sm:hidden" to="/FAQ">
//           <img src={FAQ} alt="" />
//         </Link>
//         <Link className="sm:hidden" to="/contactus">
//           <img src={contacts} alt="" />
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo_Web.png";
// import home from "../assets/home.svg";
// import aboutus from "../assets/about-us.svg";
// import gallery from "../assets/gallery.svg";
// import blogs from "../assets/blogs.svg";
// import FAQ from "../assets/FAQ.svg";
// import contacts from "../assets/contacts.svg";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for hamburger and close

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white flex justify-between items-center px-5 md:px-8 drop-shadow-lg w-10/12 h-[7%] sm:w-8/12 sm:h-[10%] rounded-full fixed top-2 sm:top-5 left-1/2 transform -translate-x-1/2 z-10">
        {/* Logo */}
        <img className="hidden sm:flex xl:w-40 md:w-28" src={Logo} alt="Logo" />

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-4">
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/">
            Home
          </Link>
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/aboutus">
            About us
          </Link>
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/gallery">
            Gallery
          </Link>
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/blogs">
            Blogs
          </Link>
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/FAQ">
            FAQ
          </Link>
          <Link className="text-sm 2xl:text-3xl font-ComicNeue" to="/contactus">
            Contact us
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden fixed top-[7%] left-0 w-full bg-white shadow-md z-20">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link className="text-lg" to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="text-lg" to="/aboutus" onClick={toggleMenu}>
              About us
            </Link>
            <Link className="text-lg" to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
            <Link className="text-lg" to="/blogs" onClick={toggleMenu}>
              Blogs
            </Link>
            <Link className="text-lg" to="/FAQ" onClick={toggleMenu}>
              FAQ
            </Link>
            <Link className="text-lg" to="/contactus" onClick={toggleMenu}>
              Contact us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
