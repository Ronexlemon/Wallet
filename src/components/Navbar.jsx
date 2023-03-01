import React from "react";


const Navbar = ()=>{
    return(
        <div className="h-8 w-full flex justify-between  ">
            <div className="">
                <button>Home</button>

            </div>
            <div className="rounded-2xl">
                <img src={``} alt="user"/>
                
                </div>
                <div>
                    <button>
                        nav
                    </button>
                
                </div>

        </div>
    )
}
export default Navbar;