import React from 'react'
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithub,
 } from '@fortawesome/free-brands-svg-icons';




const Projects = (props) => {
    
    if(props.data){
        var projects = props.data.project;
    }

    let colors=[
        'bg-1',
        'bg-2',
        'bg-3',
        'bg-2',
        'bg-3',
        'bg-1',
        'bg-3',
        'bg-1',
        'bg-2',
        'bg-1'
    ]

    return (
        
            props.data?
            
            <div className="pb-8 " id="projects">
                <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
                    {props.data.subHeading}
                </div>
                <div className="mt-5 sm:ml-4 sm:mr-4 md:ml-10 md:mr-10 2xl:ml-20 2xl:mr-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 project">
                {
                    projects.map((project,index) =>
                        
                        <div className={"card " + colors[index]}>
                            <div className="flex flex-col h-full w-full">
                                <div className="self-center content-center text-center text-4xl">
                                    {project.title}
                                </div>
                                <div className="self-center content-center text-center text-xl">
                                    {project.heading}
                                </div>
                                <div className="mx-2 flex-1">
                                    <ul className="list-disc list-inside">
                                        {project.text.map((point)=>
                                            <li>
                                                {point}
                                            </li>
                                        )}
                                    </ul>
                                    <div className="font-bold">
                                        {project.used}
                                    </div>
                                </div>
                                <div className="">
                                    <a href={project.link}>
                                        <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>
            
            :
            <div>
            ff
            </div>
            
        
        
  

                  
        //         <div className="bg-1 h-104 card">
        //         <h1 className="self-center content-center text-center">
        //             Car rental Management System
        //             </h1>
        //             <h6 className="self-center content-center text-center">
        //                 Website for browsering various timelapses
        //             </h6>
        //             <div className="mx-2">
        //                 <ul className="list-disc list-inside">
        //                     <li>
        //                     Car rental management system is management system created to manage all aspects of your rental services and allows you to expand your business.
        //                     </li>
        //                     <li>
        //                     It also covers all the aspect from booking a car to leaving it back to the owner.
        //                     </li>
        //                     {/* <li>
        //                     It facilitates all the users and give the various comfortabilities.
        //                     </li> */}
        //                 </ul>
        //                 <div className="font-bold">
        //                     Used: MySQL.
        //                 </div>
        //                 <div className="pt-0">
        //                 <a href="https://github.com/neevshah1273/Car-Rental-Management-System">
        //                     <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
        //                 </a>
        //                 </div>
        //             </div>
                    
        //         </div>
        //         <div className="bg-2 h-104 card">
        //         <h1 className="self-center content-center text-center">
        //             QUizz APP
        //             </h1>
        //             <h6 className="self-center content-center text-center">
        //                 A Blogging Website for travellers
        //             </h6>
        //             <div className="mx-2">
        //                 <ul className="list-disc list-inside">
        //                     <li>
        //                         ffg
        //                     </li>
        //                 </ul>
        //                 <div className="font-bold">
        //                     Used: Django, Python.
        //                 </div>

        //             </div>
        //         </div>
        //     </div>         

        // </div>
    )
}

export default Projects
