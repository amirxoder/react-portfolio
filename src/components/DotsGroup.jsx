import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navItems = ["home", "skills", "projects", "testimonals", "contact"];
const DotsGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {navItems.map((item, index) => (
        <AnchorLink
          key={index}
          className={`${
            selectedPage === item ? selectedStyles : "bg-dark-grey"
          } w-3 h-3 rounded-full`}
          href={item}
          onClick={() => setSelectedPage(item)}
        />
      ))}
    </div>
  );
};

export default DotsGroup;
