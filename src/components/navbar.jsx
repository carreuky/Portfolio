import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const scrollTo = () => {
    scroll.scrollTo(100); // Scrolling to 100px from the top of the page.
  };

  useEffect(() => {
    const navbarElement = document.querySelector(".navbar");
    const handleScroll = () => {
      const screenWidth = window.innerWidth;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (screenWidth > 770) {
        // For wider screens, toggle glassmorphism based on scroll position
        if (scrollTop > 0) {
          navbarElement.classList.add("navbar-glassmorphism", "shadow-md");
        } else {
          navbarElement.classList.remove("navbar-glassmorphism", "shadow-md");
        }
      } else {
        // For small screens, toggle glassmorphism based on scroll or if navbar is open
        if (scrollTop > 0 || isNavbarOpen) {
          navbarElement.classList.add("navbar-glassmorphism");
        } else {
          navbarElement.classList.remove("navbar-glassmorphism");
        }
      }
    };

    // Listen to scroll events and update styling accordingly
    window.addEventListener("scroll", handleScroll);

    // Ensure the class state is correct when the navbar state changes
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarOpen]); // Re-run the effect when isNavbarOpen changes

  return (
    <nav className="fixed md:px-12 px-4 inset-x-0  z-10 w-full bg-default py-3 navbar">
      <div className="justify-between  md:flex md:items-center ">
        <div className="flex items-center justify-between py-3 md:block md:py-5">
          {/* LOGO */}
          <a href={"/"} className={`text-2xl bg-primary rounded-full p-3`}>
            <span className="text">K</span>
            <span className="text">N</span>
          </a>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!isNavbarOpen)}
              className="p-1 text-gray-700 outline-none focus:border focus:border-white"
              aria-label={isNavbarOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="h-8 w-8 text-white hover:text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isNavbarOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              isNavbarOpen ? "block p-12 md:p-0 " : "hidden"
            }`}
          >
            <ul className=" h-screen items-center justify-center text-white md:flex md:h-auto hover:text-primary">
              <li
                onClick={() => scrollTo("gogg")}
                className="border-b-2 border-white  px-6 py-2  text-center decoration-1 underline-offset-8 md:border-b-0      "
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  className="hover:text-primary hover:translate-y-1 cursor-pointer"
                  // href="#about"
                  onClick={() => setNavbarOpen(!isNavbarOpen)}
                >
                  About
                </Link>
              </li>
              <li
                onClick={() => scrollToSection(howRef)}
                className="border-b-2 border-white  px-6 py-2  text-center decoration-1 underline-offset-8 md:border-b-0      "
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                  className="hover:text-primary hover:translate-y-1 cursor-pointer"
                  onClick={() => setNavbarOpen(!isNavbarOpen)}
                >
                  Serivices
                </Link>
              </li>
              <li
                onClick={() => scrollToSection(featuresRef)}
                className="border-b-2 border-white  px-6 py-2  text-center decoration-1 underline-offset-8 md:border-b-0      "
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="resume"
                  className="hover:text-primary hover:translate-y-1 cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1NGRzfArCDIZCrj1nqkqR07IHJoZpfdAC/view?usp=sharing",
                      "_blank"
                    );
                    setNavbarOpen(!isNavbarOpen);
                }}
                
                >
                  Resume
                </Link>
              </li>
              <li
                onClick={() => scrollToSection(whyRef)}
                className="border-b-2 border-white  px-6 py-2  text-center decoration-1 underline-offset-8 md:border-b-0      "
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="skills"
                  className="hover:text-primary hover:translate-y-1 cursor-pointer"
                  onClick={() => setNavbarOpen(!isNavbarOpen)}
                >
                  Skills
                </Link>
              </li>
              <li
                onClick={() => scrollToSection(contactUsRef)}
                className="border-b-2 border-white  px-6 py-2  text-center decoration-1 underline-offset-8 md:border-b-0      "
              >
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="projects"
                  className="hover:text-primary hover:translate-y-1 cursor-pointer"
                  onClick={() => setNavbarOpen(!isNavbarOpen)}
                >
                  Projects
                </Link>
              </li>
              <li className=" border-b-2 border-white px-5  py-3 text-center bg-primary     md:border-b-0  ">
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="hire"
                  className="hover:translate-y-1 cursor-pointer"
                  href="/vvkj"
                  onClick={() => setNavbarOpen(!isNavbarOpen)}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    // <div className="sticky top-0 z-10 navbar ">
    //   <div className="flex justify-between items-center py-4  mx-auto">
    //     <div className="border flex items-center justify-between py-3 md:block md:py-5">
    //       <a href={"/"} className={`text-2xl bg-prmary rounded-full p-3`}>
    //         <span className="text">K</span>
    //         <span className="text">N</span>
    //       </a>
    //       <div className="md:hidden">
    //         <button
    //           onClick={() => setNavbar(!navbar)}
    //           className="p-1 text-gray-700 outline-none focus:border focus:border-white"
    //           aria-label={navbar ? "Close menu" : "Open menu"}
    //         >
    //           <svg
    //             className="h-8 w-8 text-white hover:text-white"
    //             fill="none"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             {navbar ? (
    //               <path d="M6 18L18 6M6 6l12 12"></path>
    //             ) : (
    //               <path d="M4 6h16M4 12h16m-7 6h7"></path>
    //             )}
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       className={`mt-8 flex justify-self-center pb-3 md:mt-0 md:block md:pb-0 border  ${
    //         navbar ? "block p-12 md:p-0" : "hidden"
    //       }`}
    //     >
    //       <ul className="flex items-center gap-4 text-lg ">
    //         <li className="mx-2 px-2">About</li>
    //         <li className="mx-2 px-2">Services</li>
    //         <li className="mx-2 px-2">Resume</li>
    //         <li className="mx-2 px-2">Skills</li>
    //         <li className="mx-2 px-2">Projects</li>
    //         <li className="mx-2 px-4 bg-primary py-3">Hire Me</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
