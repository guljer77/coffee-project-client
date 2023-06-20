import React, { useState } from "react";
import "./update.css";
import Container from "../../components/shared/Container";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Update } from "../../api/utils";

function UpdateCoffee() {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  console.log(coffee);
  const {name, price, chef, description, photoUrl, supplier, _id} = coffee;

  const options = [
    "Espresso",
    "Macchiato",
    "Cafe Latte",
    "Cappuccino",
    "Flat White",
    "Americano",
    "Black Eye",
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleCategory = event => {
    setSelectedOption(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    Update(_id, data);
    navigate('/');
  };
  return (
    <div className="update-bg">
      <Helmet>
        <title>Espresso || Update Coffee</title>
      </Helmet>
      <Container>
        <div className="bg-[#F4F3F0] p-12">
          <div className="text-center mb-5">
            <h2 className="text-[#374151] font-rancho font-normal text-[45px]">
              Update Coffee
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="lg:flex items-center justify-between gap-5 mb-2">
                <div className="w-full">
                  <label htmlFor="coffee" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="coffee"
                    name="name"
                    defaultValue={name}
                    {...register("name")}
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
                    defaultValue={chef}
                    {...register("chef")}
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
                    defaultValue={supplier}
                    {...register("supplier")}
                    placeholder="Enter Coffee Supplier"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
              </div>
              <div className="lg:flex items-center justify-between gap-5 mb-2">
                <div className="w-full">
                  <label htmlFor="image" className="block mb-2">
                    Coffee Image
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    defaultValue={photoUrl}
                    {...register("photoUrl")}
                    id="image"
                    placeholder="Enter Photo Url"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="price" className="block mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    defaultValue={price}
                    name="price"
                    {...register("price")}
                    placeholder="Enter Coffee Price"
                    className="block w-full py-2 outline-0 pl-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="details" className="block mb-2">
                  Details
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  {...register("description")}
                  id="details"
                  placeholder="Enter Coffee Details"
                  className="w-full resize-none h-[150px] outline-0 pt-3 pl-2"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Update Coffee"
                  className="block w-full py-2 text-center font-rancho bg-[#D2B48C]"
                />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default UpdateCoffee;
