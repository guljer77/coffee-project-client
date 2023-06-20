import React, { useEffect, useState } from "react";
import Container from "../shared/Container";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { LuView } from 'react-icons/lu';
import { DeleteProduct } from "../../api/utils";

function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/coffee`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  const deleteHandle = id =>{
    DeleteProduct(id);
  }

  return (
    <div className="py-10">
      <Container>
        <div>
          <div className="text-center">
            <span>--- Sip & Savor ---</span>
            <h2 className="text-[32px] font-rancho font-semibold text-[#331A15] pb-2">
              Our Popular Products
            </h2>
            <Link
              to="/add-coffee"
              className="px-3 py-2 rounded-md bg-yellow-500 text-white font-rancho"
            >
              Add Coffee
            </Link>
          </div>
          <div className="lg:grid grid-cols-2 gap-8 mt-10">
            {product.map((productItem) => (
              <div key={productItem._id} className="flex lg:mb-0 mb-5 justify-between p-5 items-center bg-[#F5F4F1] rounded-md">
                <div>
                  <img className="w-[160px] h-auto" src={productItem.photoUrl} alt="" />
                </div>
                <div>
                  <h2>Name: {productItem.name}</h2>
                  <h2>Chef: {productItem.chef}</h2>
                  <h2>Price: $32</h2>
                </div>
                <div>
                  <div onClick={()=>navigate(`/details/${productItem._id}`)} className="w-[30px] h-[30px cursor-pointer bg-[#D2B48C] flex items-center justify-center text-white">
                    <LuView />
                  </div>
                  <div onClick={()=>navigate(`/update/${productItem._id}`)} className="my-5 cursor-pointer bg-[#3C393B] w-[30px] h-[30px] flex items-center justify-center text-white">
                    <FaPencilAlt />
                  </div>
                  <div onClick={()=>deleteHandle(productItem._id)} className="w-[30px] h-[30px] cursor-pointer bg-[#EA4744] flex items-center justify-center text-white">
                    <FaTrash />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
