import React from "react";
import Container from "../shared/Container";
import { Link } from "react-router-dom";
import image from "../../assets/capacino.png";

function Product() {
  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <span>--- Sip & Savor ---</span>
            <h2 className="text-[32px] font-rancho font-semibold text-[#331A15] pb-2">
              Our Popular Products
            </h2>
            <Link to='/add-coffee' className="px-3 py-2 rounded-md bg-yellow-500 text-white font-rancho">
              Add Coffee
            </Link>
          </div>
          <div className="lg:grid grid-cols-2 gap-8 mt-10">
            <div className="flex lg:mb-0 mb-5 justify-between p-5 items-center bg-[#F5F4F1] rounded-md">
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h2>Name: American Coffee</h2>
                <h2>Chef: Mr. Martin Paul</h2>
                <h2>Price: $32</h2>
              </div>
              <div>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
