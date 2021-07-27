import React from 'react'
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithub, 
 } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
    return (
        <div className="pb-8 " id="projects">
            <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
                Projects
            </div>  
            <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-1 h-104 card">
                    <h1 className="self-center content-center text-center">
                    Nomadic
                    </h1>
                    <h6 className="self-center content-center text-center">
                        A Blogging Website for travellers
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                Designed, built and deployed a MERN stack-based web application to store and explore travel Blogs.
                            </li>
                            <li>
                                Implemented email login using JWT and OAuth Google login for user authentication.
                            </li>
                            <li>
                                Set up database with Mongo DB Atlas to store users, post and implement its edit, upvote and delete functionality.
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: React, Node, Express, MongoDB (mongoose, Atlas), Redux.
                        </div>
                        <div className="pt-4">
                        <a href="https://github.com/neevshah1273/Nomadic">
                            <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
                        </a>
                        </div>
                    </div>

                </div>
                <div className="bg-2 h-104 card">
                <h1 className="self-center content-center text-center">
                    Timeflux
                    </h1>
                    <h6 className="self-center content-center text-center">
                        browsering timelapses
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                Developed a React application to explore slow Mo and Time-Lapse videos.
                            </li>
                            <li>
                                Implemented email login using Firebase.
                            </li>
                            <li>
                                Set up database with Firebase to store information of user, posts and comments.
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: ReactJs, Google Firebase.
                        </div>
                        <div className="pt-28">
                        <a href="https://github.com/ParthPrajapati43/WebT_Project_Timeflux">
                            <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
                        </a>
                        </div>
                    </div>
                </div>
                <div className="bg-3 h-104 card">
                <h1 className="self-center content-center text-center">
                    Portfolio
                    </h1>
                    <h6 className="self-center content-center text-center">
                        personal Portfolio
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                Developed Personal Portfolio
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: ReactJs, TailWindCSS.
                        </div>
                        <div className="pt-52">
                        <a href="">
                            <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
                        </a>
                        </div>                        
                    </div>

                </div>
                <div className="bg-2 h-104 card">
                    <h1 className="self-center content-center text-center">
                        Localify
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Grocery Delivery App
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                ffg
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: Flutter, MongoDB, NodeJs, ExpressJs.
                        </div>
                    </div>

                </div>
                <div className="bg-3 h-104 card">
                <h1 className="self-center content-center text-center">
                    CPU Scheduling Algorithm App
                    </h1>
                    <h6 className="self-center content-center text-center">
                        App
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                            Solve problems of CPU Scheduling algorithm, solution will show you which process is at which state at every point of time.
                            </li>
                            <li>
                            It helps to understand how CPU Scheduling algorithms works.
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: Flutter.
                        </div>
                    </div>
                </div>
                <div className="bg-1 h-104 card">
                <h1 className="self-center content-center text-center">
                    Auction11
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Work Under Construction
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>                
                <div className="bg-3 h-104 card">
                    <h1 className="self-center content-center text-center">
                    AirHockey
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Game Development
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                Developed Airhockey using JAVaA
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: java.
                        </div>
                    </div>

                </div>
                <div className="bg-1 h-104 card">
                <h1 className="self-center content-center text-center">
                    Car rental Management System
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Website for browsering various timelapses
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                            Car rental management system is management system created to manage all aspects of your rental services and allows you to expand your business.
                            </li>
                            <li>
                            It also covers all the aspect from booking a car to leaving it back to the owner.
                            </li>
                            <li>
                            It facilitates all the users and give the various comfortabilities.
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: MySQL.
                        </div>
                    </div>
                    
                </div>
                <div className="bg-2 h-104 card">
                <h1 className="self-center content-center text-center">
                    QUizz APP
                    </h1>
                    <h6 className="self-center content-center text-center">
                        A Blogging Website for travellers
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                ffg
                            </li>
                        </ul>
                        <div className="font-bold">
                            Used: Django, Python.
                        </div>

                    </div>
                </div>
            </div>         

        </div>
    )
}

export default Projects
