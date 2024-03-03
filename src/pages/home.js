import React, { useEffect, useState } from 'react'
import './home.css'
import { InstagramLogo,GithubLogo, LinkedinLogo } from 'phosphor-react';
import ProjectsTable from '../components/projectsTable';
import { useLocation } from 'react-router-dom';

const Home = ( ) => {

    const { pathname } = useLocation();

    const fixedText = "Hi, my name is  Vlad"

    const textArray = "Bunny.".split("");

    const [introText, setIntroText ] = useState(fixedText)

useEffect(()=>{
const currentText = [];
let i = 0;
let j = 0;
const newCurrentText = [];

const interval = setInterval(() => {
  if (i < textArray.length) {
    console.log(textArray[i]);
    currentText.push(textArray[i]);
    setIntroText(fixedText + currentText.join(""))
    i += 1;
    console.log(currentText);
  } else if (i >= textArray.length && currentText.length > 0) {
    currentText.pop();
    setIntroText(fixedText + currentText.join(""))
    console.log("la sacas", currentText);
  } else {
    const newTextArray = "imir Chavez".split("");
    if (j < newTextArray.length) {
      console.log(newTextArray[j]);
      newCurrentText.push(newTextArray[j]);
      setIntroText(fixedText + newCurrentText.join(""))
      j += 1;
      console.log(newCurrentText);
      if (j >= newTextArray.length) {
        console.log("se acabo");
        clearInterval(interval);
      }
    }
  }
}, 300);

    },[])



    useEffect(() => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (pathname === '/projects') {
            window.scrollTo({ top: 1300, behavior: 'smooth' });
        }
    }, [pathname]);

    return (
    <div className='home'>
        <div className='introContainer'>
            <div className='introText'>
                <p>{introText}<svg viewBox="8 4 8 16" xmlns="http://www.w3.org/2000/svg"
  className="cursor"
>
  <rect x="10" y="3" width="1" height="20" fill="#000000" />
</svg></p>
                <span>Frontend developer</span>
                <span className='react'>Specialized in React</span>
            </div>
            <div className='introImage'>
                <img src="https://imgur.com/J7DqpYj.png" alt='devImage' />
            </div>
        </div>
        <div className='presentationContainer'>
            <h1>About Me:</h1>
            <p>Proud owner of the best music taste in the industry, UI/UX design enthusiast, gymrat, soccer,
               basketball and sports in general lover.<br/> Recently graduated from the Computer Systems Engineering
               program at UDLAP. On a journey to expand my software development skills.<br/><br/>Based in Puebla, Mexico.
            </p>
            <div className='bottoms react'>Connect with me:</div>
        </div>
        <div className='connect'>
            <a href='https://github.com/Vlado1210' target="_blank" rel="noopener noreferrer"><GithubLogo size={94}/></a>
            <a href='https://www.linkedin.com/in/vlado-chavez-a41b9122a/'target="_blank" rel="noopener noreferrer"><LinkedinLogo size={94} /></a>
            <a href='https://www.instagram.com/vladbunny__/'target="_blank" rel="noopener noreferrer"><InstagramLogo size={94}/></a>
        </div>
        <div>
        <ProjectsTable/>
        </div>
        <div className='footer'>
            <p>Designed and developed by Vladimir Chavez</p>
            <p>Copyright © 2024 <a href="https://www.instagram.com/vladbunny__/" target="_blank" rel="noopener noreferrer">@vladbunny</a></p>
            <div className='footerConnect'>
            <a href='https://github.com/Vlado1210'target="_blank" rel="noopener noreferrer"><GithubLogo className="footerLink" size={34}/></a>
            <a href='https://www.linkedin.com/in/vlado-chavez-a41b9122a/'target="_blank" rel="noopener noreferrer"><LinkedinLogo className="footerLink" size={34} /></a>
            <a href='https://www.instagram.com/vladbunny__/'target="_blank" rel="noopener noreferrer"><InstagramLogo className="footerLink" size={34}/></a>
        </div>
        </div>
    </div>
    )
}

export default Home