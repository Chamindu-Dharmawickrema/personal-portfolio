import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/mobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {

  //track the loading state 
  const [isLoaded, setIsLoaded ] = useState(false);
  //track the menu state
  const [menuOpen, setMenuOpen ] = useState(false)

  return (
    <>
      {/* Loading screen show when the isLoaded false */}
      {!isLoaded && <LoadingScreen onComplete = {()=> setIsLoaded(true)}/> }  
      {/* If isloaded = true display this */}  
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#212428] text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>    
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>   
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        
      </div>  
    </>
  )
}

export default App
