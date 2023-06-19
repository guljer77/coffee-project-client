import React from "react";
import Container from "../shared/Container";
import image1 from "../../assets/Rectangle 9.png";
import image2 from "../../assets/Rectangle 10.png";
import image3 from "../../assets/Rectangle 11.png";
import image4 from "../../assets/Rectangle 12.png";
import image5 from "../../assets/Rectangle 13.png";
import image6 from "../../assets/Rectangle 14.png";
import image7 from "../../assets/Rectangle 15.png";
import image8 from "../../assets/Rectangle 16.png";
import { Helmet } from "react-helmet";

function FollowSection() {
  return (
    <div className="py-10">
      <Helmet>
        <title>Espresso Emporium</title>
      </Helmet>
      <Container>
        <div>
          <div className="text-center">
            <span>Follow Us Now</span>
            <h2 className="text-[32px] font-rancho font-semibold text-[#331A15] pb-2">
              Follow on Instagram
            </h2>
          </div>
          <div className="lg:grid grid-cols-4 gap-5 pt-5">
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image1} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image2} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image3} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image4} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image5} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image6} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image7} alt="" />
            </div>
            <div className="lg:mb-0 mb-4">
              <img className="w-full" src={image8} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FollowSection;
