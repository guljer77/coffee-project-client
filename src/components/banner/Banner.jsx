import React from "react";
import "./banner.css";
import Container from "../shared/Container";

function Banner() {
  return (
    <div className="bg-banner">
      <Container>
        <div className="flex justify-end">
          <div className="text-white font-rancho">
            <h2 className="text-[36px] pb-2">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="text-[16px] font-sans font-light pb-3">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of <br /> every moment!!! Enjoy
              the beautiful moments and make them memorable.
            </p>
            <button className="px-3 py-2 rounded-lg bg-yellow-500 text-white text-[18px]">Learn More</button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
