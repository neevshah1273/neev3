import Navbar from "./Components/Navbar";
import Footer from './Components/Footer.js';
import Home from "./Components/Home";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills.js";
import React,{useEffect,useState} from "react";



function App() {

  const [data,setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      })
      .catch((err)=>console.log(err.message));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div>       

    <body className="bg-gray-700 flex flex-col min-h-screen ">
      {<header className="top-0 w-full">
        <Navbar />
      </header> 
       }
      <main className="flex-grow">
        <Home/>
        <Projects data={data.projects}/>
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
