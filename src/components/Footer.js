import React from "react";
import pic from "../assets/dp1.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import {FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={pic}
          alt="Founder"
        />

        <h2>Mohd Ubais</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
        <a href="https://wa.link/coydr8" target={"blank"}>
            <FaWhatsapp />
          </a>

          <a href="https://www.linkedin.com/in/mohd-ubais-8b85b5251/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Ubais2143" target={"blank"}>
            <AiFillGithub />
          
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;