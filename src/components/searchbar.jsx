
import { useState,useRef } from 'react'
import About from './about'
import Project from './Project';
import Skills from './skills';
import Contact from './Contact';
import Help from './Help';
import Invalid from './Invalid';


const Searchbar = () => {      
  const refinp = useRef();
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);

  const sendData = async (e) => {
        e.preventDefault();;
      const name = refinp.current.value.toLowerCase();
      if (name === 'cd about') {
        setShowAbout(true);
        setShowProjects(false);
        setShowContact(false);
        setShowSkills(false);
      }
      else if (name === 'cd projects') {
        setShowProjects(true);
        setShowAbout(false);
        setShowContact(false);
        setShowSkills(false);
      }
      else if (name === '-help') {
        setShowHelp(true); // Show help information
        setShowAbout(false);
        setShowProjects(false);
        setShowContact(false);
        setShowSkills(false);
      }
      else if (name === 'cd contact') {
        setShowContact(true); // Redirect to contact page
        setShowAbout(false);
        setShowProjects(false);
        setShowSkills(false);
      }
      else if (name === 'cd skills') {
        setShowSkills(true); // Redirect to skills page
        setShowAbout(false);
        setShowProjects(false);
        setShowContact(false);
      }
      else if (name === 'cat resume') {
        window.location.href = 'https://drive.google.com/file/d/1UoBMD-Omt7ovyzlHYQzNSv8M-RvhJKak/view?usp=chrome_ntp'; // Redirect to resume page
      }
      else if (name === 'cat github') {
        window.location.href = 'https://github.com/Sohardbegraj'; // Redirect to github page
      }
      else if (name === 'cat linkdin') {
        window.location.href = 'https://www.linkedin.com/in/sohard-begraj-a82343259/'; // Redirect to github page
      }
      else if (name === 'cat leetcode') {
        window.location.href = 'https://leetcode.com/u/sohard16begraj/'; // Redirect to github page
      }
      else{
        setShowAbout(false);
        setShowProjects(false);
        setShowContact(false);
        setShowSkills(false);
        setShowInvalid(true); // Show invalid command message
      }
      refinp.current.value='';
    };

  return (
    <>
    <form onSubmit={sendData}>
    <input  type='text' placeholder='type your command' ref={refinp} autoComplete='off' className='bg-transparent mx-4 border-none h-8 font-mono text-xl outline-none '></input>
    </form>
    <div className='absolute top-0 left-0 z-20'>
    {showAbout && <About setShowAbout={setShowAbout}/>}
    {showProjects && <Project setShowProjects={setShowProjects}/>}
    {
    showContact && <Contact setShowContact={setShowContact}/>}
    </div>
    <div className='absolute md: top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
    
    {
      showSkills && <Skills showSkills={setShowSkills}/>
    }
    {
      showHelp && <Help setShowHelp={setShowHelp}/>
    }
    {
      showInvalid && <Invalid setShowInvalid={setShowInvalid} />
    }
    </div>
    
      </>
  )
}

export default Searchbar 
