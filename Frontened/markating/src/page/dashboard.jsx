import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDebugValue } from "react";


export const Dashboard = () => {

    const [data , setdata] = useState()

    useEffect(() => {
        getdata()
    },[])

    const getdata = () => {
        axios.get("https://easytofind.herokuapp.com/add").then(function(res){
            setdata(res.data)
            console.log(res.data)
        })
    }

    return(
        <div>Dashboard

                {
                    data?.map((el , i) => {
                        console.log(el.profile_pic[0])
                        return(

                            <div key={i}>
                                <h3>Name :  {el.name}</h3>
                                <h3>Price :  {el.price}</h3>
                                <h3>Category : {el.category}</h3>
                                    <img src={el.profile_pic[0]} alt="" />



                                    {/* <a href={el.profile_pic[0]}></a> */}
                               
                            </div>

                        )
                    })
                }
        </div>
    )
}