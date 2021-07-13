import React from 'react';
import {Link} from 'react-router-dom';


const Navbar= () => {
    return (
        <div className="bg-gray-900">
            <div className=" ml-10  text-white text-4xl">
                Neev
            </div>
            <div>
                <a
                    href="#projects" 
                >
                    Projects
                    </a>
            </div>
        </div>
    )
}

export default Navbar;