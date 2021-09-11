import React from 'react';


const Navbar= () => {
    return (
        <div className="bg-gray-900">

            <div className=" ml-10 row-auto text-4xl italic space-x-10">
                <a
                    href="#projects" 
                    className="text-white"
                >
                    {"<Projects/>"}
                    </a>
                    <a
                    href="#Skills" 
                    className="text-white"
                >
                    {/* {"<Skills/>"} */}
                    </a>
                    
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar;