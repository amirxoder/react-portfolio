import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500 capitalize`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const navItems = ["home", "skills", "projects", "testimonals", "contact"];

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [isMenutoggle, setIsMenutoggle] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AC</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {navItems.map((item, index) => (
              <Link
                key={index}
                page={item}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2 "
            onClick={() => setIsMenutoggle((prev) => !prev)}
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {/* Mobile Menu  Popup */}

        {!isAboveSmallScreen && isMenutoggle && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] ">
            {/* Close Icon */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenutoggle((prev) => !prev)}>
                <img src={closeIcon} alt="closeIcon" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  page={item}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
