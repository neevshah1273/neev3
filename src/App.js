import Navbar from "./Components/Navbar";
import Footer from './Components/Footer.js';
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills.js";
import React from "react";
import {Sugar} from 'react-preloaders';

function App() {
  return (
    
    <div>       
        {/* <Sugar/> */}

    <body className="bg-gray-700 flex flex-col min-h-screen ">
      {<header className="top-0 w-full">
        <Navbar />
      </header> 
       }
      <main className="flex-grow">
        <Home/>
        <Projects/>
        <Skills/>
      </main>

      <footer className="fixed bottom-0 w-full">
        <Footer/>
      </footer>
    </body>
    
    </div>
    
  );
}

export default App;
