import React, { useState } from "react";
import Container from "../../components/shared/Container";
import "./addcoffee.css";
import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import Select from "react-select";
import { Helmet } from "react-helmet";

const options = [
  { value: "Espresso", label: "Espresso" },
  { value: "Macchiato", label: "Macchiato" },
  { value: "Cafe Latte", label: "Cafe Latte" },
  { value: "Cappuccino", label: "Cappuccino" },
  { value: "Flat White", label: "Flat White" },
  { value: "Americano", label: "Americano" },
  { value: "Black Eye", label: "Black Eye" },
];

function AddCoffee() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="addBanner">
      <Helmet>
        <title>Espresso || Add Coffee</title>
      </Helmet>
      <Container>
        <div>
          <Link to="/" className="text-[26px] font-rancho">
            <BiLeftArrowAlt className="inline" /> Back to home
          </Link>
        </div>
        <div className="bg-[#F4F3F0] p-12">
          <div className="text-center mb-5">
            <h2 className="text-[#374151] font-rancho font-normal text-[45px]">
              Add New Coffee
            </h2>
            <p className="text-[16px] font-light">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at <br /> its layout.
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed <br /> to using Content
              here.
            </p>
          </div>
          <div>
            <form action="">
              <div className="lg:flex items-center justify-between gap-5 mb-2">
                <div className="w-full">
                  <label htmlFor="coffee" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="coffee"
                    name="name"
                    placeholder="Enter Coffee Name"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="chef" className="block mb-2">
                    Chef
                  </label>
                  <input
                    type="text"
                    id="chef"
                    name="chef"
                    placeholder="Enter Coffee Chef"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
              </div>
              <div className="lg:flex items-center justify-between gap-5 mb-2">
                <div className="w-full">
                  <label htmlFor="supplier" className="block mb-2">
                    Supplier
                  </label>
                  <input
                    type="text"
                    id="supplier"
                    name="supplier"
                    placeholder="Enter Coffee Supplier"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="category" className="block mb-2">
                    Category
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    name="category"
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="details" className="block mb-2">Details</label>
                <textarea name="description" id="details" placeholder="Enter Coffee Details" className="w-full resize-none h-[150px] outline-0 pt-3 pl-2" ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block mb-2">Coffee Image</label>
                <input type="url" name="photoUrl" id="image" placeholder="Enter Photo Url" className="block w-full py-2 outline-0 pl-2" />
              </div>
              <div>
                <input type="submit" value="Add Coffee" className="block w-full py-2 text-center font-rancho bg-[#D2B48C]" />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddCoffee;
