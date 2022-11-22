import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const socialLinks = [
  { icon: <AiFillLinkedin />, link: "https://linkedin.com" },
  { icon: <AiOutlineInstagram />, link: "https://intagram.com" },
  { icon: <AiFillFacebook />, link: "https://facebook.com" },
  { icon: <AiOutlineTwitter />, link: "https://twitter.com" },
];

const SocialMedia = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target={"_blank"}
          rel="noreferrer"
          className="hover:opacity-50 transition duration-500 text-3xl"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
