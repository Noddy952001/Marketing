import React from "react";
import axios  from "axios"
import { useState } from "react";
import { useEffect } from "react";

export const AddCompney = () => {



    const [Name , setname] = useState()
    const [Price , setprice] = useState()
    const [Category , setcategory] = useState()
    const [pick , setpick] = useState(null)


    const data = {
        name : Name,
        price : Price ,
        category : Category,
        profile_pic : pick
    }

    console.log(pick)


    const HandelSubmit = () => {
        axios.post("https://easytofind.herokuapp.com/add/single",data).then(function(res){
            console.log(res.data)
            alert("Add sucesfully")
        })
    }

    return(
        <div>
            <h1>ADD COMPANEY</h1>


            <label>Name</label>
            <input 
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                    setname(e.target.value)
                }}
            /> 
            <br />


            <label>Price</label>
            <input 
                type="text"
                placeholder="Enter Category"
                onChange={(e) => {
                    setprice(e.target.value)
                }}
            /> 
            <br />


            <label>Category</label>
            <input 
                type="text"
                placeholder="Enter Price"
                onChange={(e) => {
                    setcategory(e.target.value)
                }}
            /> 
            <br />



            <label>Image</label>
            <input 
                type="file"
                onChange={(e) => {
                    setpick(e.target.files[0]);
                    // console.log(e.target.files[0])
                }}
            /> 
            <br />


            <button
                onClick={HandelSubmit}
            >Add</button>
        </div>
    )
}