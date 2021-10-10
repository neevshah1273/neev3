import React from 'react';
import './Skills.css';


const Skills = () => {
    return (
        <div className="sills pt-16 pb-8 mb-28" id="projects">
            <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
                Skills Overview
            </div>  
            <div className="mt-5 pb-5 flex flex-col justify-center items-center">

             <iframe
                title="Skills"
                src="https://carbon.now.sh/embed?bg=rgba%2874%2C144%2C226%2C1%29&t=material&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Fira+Code&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=const%2520ProgrammingLanguages%2520%253D%2520%255BC%252FC%252B%252B%252C%2520Python%252C%2520Java%252C%2520Dart%252C%2520JavaScript%255D%250A%250Aconst%2520Technologies%2520%253D%2520%255BReactJs%252C%2520NodeJs%252C%2520ExpressJs%252C%2520JQuery%252C%2520Bootstrap%252C%2520Tailwind%2520CSS%252C%2520Html%252C%2520CSS%252C%2520%2509%2509%2509%2509%2509%2509%2509%2520%2520Flutter%252C%2520MySQL%252C%2520MongoDB%252C%2520Firestore%255D%250A%250Aconst%2520Other%2520%253D%2520%255BGit%252C%2520Postman%255D"
                style={{width: "1024px", height: "312px", border:"0", transform: "scale(1)", overflow:"hidden"}}
                sandbox="allow-scripts allow-same-origin">
            </iframe> 
            </div>         

        </div>
    )
}

export default Skills;
