import './App.css'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { About } from './components/About'
import { Work } from './components/Work'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'



function App() {
  return (
  <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
  </div>
    
  );
}

export default App
