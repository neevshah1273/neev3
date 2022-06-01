import React from 'react';


const Navbar= () => {
    return (
        <div className="bg-gray-900">

            <div className=" ml-10 row-auto text-4xl italic space-x-10">
                <a
                    href="#experience" 
                    className="text-white"
                >
                    {"<Experience/>"}
                </a>
                <a
                    href="#projects" 
                    className="text-white"
                >
                    {"<Projects/>"}
                </a>
                <a
                    href="#skills" 
                    className="text-white"
                >
                    {"<Skills/>"}
                </a>
                    
            </div>
            <div>

            </div>
        </div>
    )
}

export default Navbar;