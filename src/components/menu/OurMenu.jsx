import React from "react";
import Container from "../shared/Container";
import image1 from "../../assets/menu.png";
import image2 from "../../assets/menu2.png";
import image3 from "../../assets/menu3.png";
import image4 from "../../assets/menu4.png";

function OurMenu() {
  return (
    <div className="bg-[#ECEAE3] py-10">
      <Container>
        <div className="lg:grid grid-cols-4 gap-8">
          <div className="lg:mb-0 mb-5">
            <img src={image1} alt="" />
            <h2 className="text-[22px] font-rancho py-2">Awesome Aroma</h2>
            <p className="text-[16px] font-light">
              You will definitely be a fan of the design & aroma of your
              coffee
            </p>
          </div>
          <div className="lg:mb-0 mb-5">
            <img src={image2} alt="" />
            <h2 className="text-[22px] font-rancho py-2">High Quality</h2>
            <p className="text-[16px] font-light">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="lg:mb-0 mb-5">
            <img src={image3} alt="" />
            <h2 className="text-[22px] font-rancho py-2">Pure Grades</h2>
            <p className="text-[16px] font-light">
              The coffee is made of the green coffee beans which you will
              love
            </p>
          </div>
          <div className="lg:mb-0 mb-5">
            <img src={image4} alt="" />
            <h2 className="text-[22px] font-rancho py-2">Proper Roasting</h2>
            <p className="text-[16px] font-light">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurMenu;
