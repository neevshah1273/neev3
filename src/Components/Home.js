import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './Home.css';
import '../assets/Neev.jpg';

const Home = () => {
    return (
        <div>
            <div className="flex abc h-screen">
                <div className="m-auto justify-center items-center align-middle">
                    <div className="align-middle content-center items-center m-auto my-auto headshot headshot-2"></div>
                    <div className="my-4"></div>
                    
                    <div className="text-center text-4xl text-white">
                        <TypewriterComponent
                            onInit = {(typewriter) => {
                                typewriter.
                                typeString("Hello!")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("I'm Neev Shah")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("I'm Software Developer").start()
                            }}
                        />
                    </div>
                    <div className="my-10"></div>
                    <div className="flex">
                        <a href="mailto:neevshah1273@gmail.com">
                        <button className="flex-1 mx-4 bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-full inline-flex items-center
                        h-12">
                        <div className="text-2xl mx-5 text-white">
                                Hire Me
                            </div>
                        
                            
                        </button>
                        </a>
                        <a href="NeevShahV3.0.pdf" download>
                        <button className="flex-1 mx-4 bg-blue-500 hover:bg-blue-700 text-white h-12 font-bold py-2 px-4 rounded-full inline-flex items-center">
                            <svg className="fill-current w-8 h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download Resume</span>
                        </button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
