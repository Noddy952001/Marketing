import React from "react";
import axios  from "axios"
import { useState } from "react";
import { useEffect } from "react";

export const AddCompney = () => {

    const [data , setdata ] = useState([])

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("https://easytofind.herokuapp.com/add").then(function(res){
            console.log(res.data)
        })
    }

    return(
        <div>
            <h1>ADD COMPANEY</h1>
        </div>
    )
}