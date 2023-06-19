import React from "react";
import Container from "../Container";
import "./footer.css";
import Logo from "../../../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer-bg">
        <Container>
          <div className="lg:grid grid-cols-2 gap-8">
            <div>
              <img src={Logo} alt="" />
              <h2 className="text-[22px] font-rancho font-semibold text-[#331A15] py-2">Espresso Emporium</h2>
              <p className="text-[16px] font-light text-[1B1A1A]">
                Always ready to be your friend. Come & Contact with us to share
                your <br /> memorable moments, to share with your best
                companion.
              </p>
              <div className="flex space-x-5">
                <span className="text-2xl pt-3">
                  <FaFacebook />
                </span>
                <span className="text-2xl pt-3">
                  <FaTwitter />
                </span>
                <span className="text-2xl pt-3">
                  <FaInstagram />
                </span>
                <span className="text-2xl pt-3">
                  <FaLinkedin />
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-[22px] font-rancho font-semibold text-[#331A15] py-2">Connect with Us</h2>
              <div>
                <form action="">
                  <input className="w-full block mb-3 py-2 pl-2 outline-0" type="text" placeholder="Name" />
                  <input className="w-full block mb-3 py-2 pl-2 outline-0" type="text" placeholder="Email" />
                  <textarea className="w-full block mb-3 py-2 pl-2 outline-0 resize-none h-[150px]" name="" id="" placeholder="Message"></textarea>
                  <input className="text-[18px] font-rancho border-2 border-b-[#331A15] cursor-pointer text-[#331A15] px-3 py-2 rounded-3xl" type="submit" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bottom-footer">
        <Container>
          <p className="text-white text-[16px] text-center font-rancho">Copyright Espresso Emporium ! All Rights Reserved</p>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
