import React from 'react';
import './Skills.css';


const Skills = () => {
    return (
        <div className="sills pt-16 pb-8 mb-28" id="skills">
            <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
                Skills Overview
            </div>  
            <div className="mt-5 pb-5 container flex flex-col justify-center items-center">
                <iframe
                    className="responsive-iframe"
                    title="Skills"
                    src="https://carbon.now.sh/embed/2OktHzzRIWdgtFK5ZvK7"
                    style={{border:"0", transform: "scale(1)", overflow:"hidden"}}
                    sandbox="allow-scripts allow-same-origin">
                </iframe>
            </div>         

        </div>
    )
}

export default Skills;
