import React from "react";
import Navbar from "../components/Navbar";
import CreateAccount from "../components/CreateAccout";

const Home = ()=>{
    return(
        <div className="h-screen w-80 bg-slate-200 border border-green-500 ">
             
 <Navbar/>
 <CreateAccount/>

        </div>
       
    )
}
export default Home;