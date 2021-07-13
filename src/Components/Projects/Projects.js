import React from 'react'
import './Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithub, 
 } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
    return (
        <div className="pt-16 pb-8 " id="projects">
            <div className="text-5xl text-white self-center items-center justify-center content-center text-center">
                Projects
            </div>  
            <div className="mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="bg-1 mx-12 h-120">
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
                        <div className="pt-12">
                        <a href="https://github.com/neevshah1273/Nomadic">
                            <FontAwesomeIcon icon={faGithub} color="#000" className="fa-3x" />
                        </a>
                        </div>
                    </div>

                </div>
                <div className="bg-2 mx-12 h-120">
                <h1 className="self-center content-center text-center">
                    Timeflux
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Website for browsering various timelapses
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                Developed a responsive Application where user can share their time-lapse.
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
                <div className="bg-3 mx-12 h-120">
                <h1 className="self-center content-center text-center">
                    Portfolio
                    </h1>
                    <h6 className="self-center content-center text-center">
                        personal Portfolio
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                ffg
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-2 mx-12 h-120">
                    <h1 className="self-center content-center text-center">
                        Grocery delivery App
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
                    </div>

                </div>
                <div className="bg-3 mx-12 h-120">
                <h1 className="self-center content-center text-center">
                    CPU Scheduling Algorithm App
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Website for browsering various timelapses
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                ffg
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-1 mx-12 h-120">
                <h1 className="self-center content-center text-center">
                    Energy Storage Calculator App
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
                    </div>
                </div>                
                <div className="bg-3 mx-12 h-120">
                    <h1 className="self-center content-center text-center">
                    AirHockey
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
                    </div>

                </div>
                <div className="bg-1 mx-12 h-120">
                <h1 className="self-center content-center text-center">
                    Car rental Management System
                    </h1>
                    <h6 className="self-center content-center text-center">
                        Website for browsering various timelapses
                    </h6>
                    <div className="mx-2">
                        <ul className="list-disc list-inside">
                            <li>
                                ffg
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-2 mx-12 h-96">
                <h1 className="self-center content-center text-center">
                    Nomadic
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
                    </div>
                </div>
            </div>         

        </div>
    )
}

export default Projects
