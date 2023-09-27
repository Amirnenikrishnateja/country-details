import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
 
function Readmore(){
    var x=useParams()
    console.log(x)
    var[details,setDetails]=useState()
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/name/"+x.cname)
        .then(res=>setDetails({...res.data[0]}))
    },[x.cname])
    
    console.log(details)
    return(<div>
        <h1>details::{x.cname}</h1>
        
        {
            typeof(details)==="object"&&
            <div>
            <h4>{details.population}</h4>
            <h4>{details.name.common}</h4>
            <h4>{details.capital}</h4>
            </div>
        }
        

                

    </div>)
}
export  default Readmore 