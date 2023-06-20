import React from "react";
import "./details.css";
import Container from "../../components/shared/Container";
import { Link, useLoaderData } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";

function Details() {
  const coffee = useLoaderData();
  console.log(coffee);
  const {name, category, chef, description, photoUrl, supplier} = coffee;
  return (
    <div className="details-bg">
      <Container>
        <div>
          <Link to="/" className="text-[26px] font-rancho">
            <BiLeftArrowAlt className="inline" /> Back to home
          </Link>
        </div>
        <div className="bg-[#F4F3F0] p-12">
          <div className="lg:flex gap-5 items-center justify-between">
            <div className="lg:w-1/2 w-full">
              <img src={photoUrl} className="w-full" alt="" />
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-[24px] mb-5 font-rancho font-semibold text-[#331A15]">Niceties</h2>
              <div>
                <h4 className="text-[#1B1A1A] font-semibold">Name: <span className="text-[#5C5B5B] font-light">{name}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Chef: <span className="text-[#5C5B5B] font-light">{chef}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Supplier: <span className="text-[#5C5B5B] font-light">{supplier}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Category: <span className="text-[#5C5B5B] font-light">{category}</span></h4>
                <h4 className="text-[#1B1A1A] font-semibold">Details: <span className="text-[#5C5B5B] font-light">{description}</span></h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Details;
