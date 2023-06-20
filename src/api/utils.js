import { toast } from "react-hot-toast";

export const AddCoffeeItem = data =>{
  fetch('https://coffee-server-guljer77.vercel.app/coffee', {
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedId){
      toast.success("Coffee Add Success");
    }
  })
}

//update
export const Update = (id, data) =>{
  fetch(`https://coffee-server-guljer77.vercel.app/coffee/${id}`,{
    method: "PUT",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
      toast.success("Coffee Update Success");
    }
  })
}

export const DeleteProduct = id =>{
  fetch(`https://coffee-server-guljer77.vercel.app/coffee/${id}`,{
    method: "DELETE"
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    if(data.deletedCount>0){
      toast.error("Coffee Delete")
    }
  })
}