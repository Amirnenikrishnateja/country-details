import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Readmore from "./readmore";
function Country(){
 var [Country,setCountry]=useState([])
 useEffect(()=>{
    axios.get("https://restcountries.com/v3/all").then((res)=>setCountry([...res.data]))
 })
 return<div>
    <h1>countrys</h1>
    <div>
                   <Outlet></Outlet>
       </div>
    
   <ul>
    {
    Country.map(details=>{
           return (<div style={{display:"flex"}}>
            <div style={{}}>
           <li>{details.name.common}</li>
                   <li><img width="150px"src={details.flags[0]} alt="hi" /></li>
                   <Link to={"/country/countrydetails/"+details.name.common}>Read me</Link>
                   
                   </div>
                   


                   </div>)

        })
        
    }
    
    </ul>

 </div>

 
}
export default Country
