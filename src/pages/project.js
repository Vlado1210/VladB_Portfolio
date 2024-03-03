import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { data }  from '../assets/projectinfo';
import './project.css'


const Project = () => {

    const { projectName } = useParams();

    const projectToDescribe = data.find((project)=>projectName === project.name)

    const [modalOn, setModalOn] = useState(false)

    const modalRef = useRef();

    const projectIndex = data.findIndex((project)=>project.name === projectName)

    useEffect(()=>{

      if(modalOn){
      function handleClickOutside(event) {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setModalOn(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };}
    },[modalOn])

  return (
    projectToDescribe ?

    <div className='container'>
    <div className='project'>
      <div className='projectImage'>
        {
        projectToDescribe.detailedImage.endsWith("4") ?
        <video key={projectToDescribe.detailedImage} autoPlay muted loop>
        <source src={projectToDescribe.detailedImage} type="video/mp4"/></video>
        :  <img src={projectToDescribe.detailedImage} alt='project'/>
        }
      </div>
      <div className='projectData'>
        <div className='projectText'>
        <h1>{projectToDescribe.name}</h1>
        <p>{projectToDescribe.description}</p>
        </div>
        <div className='projectBadges'>
        <button className='learnMore' onClick={()=>setModalOn(true)} >Learn More</button>
        <div>{projectToDescribe.languages.map((language)=>{
          return(
            <span className={`${language}`}>{language}</span>
          )
        })}</div>
        </div>
        <a href={projectToDescribe.github} target="_blank" rel="noopener noreferrer"><button className='github' >Github</button></a>
      </div>
    </div>
    <div className='nextPreviousButtons'>
      <button> <Link className='link' to={projectIndex > 0 ? `/project/${data[projectIndex - 1 ].name}`:  `/project/${data[data.length -1 ].name}`}>Previous Project</Link></button>
      <button> <Link className='link' to={projectIndex > data.length - 2 ? `/project/${data[0].name}`:  `/project/${data[projectIndex  +1 ].name}`}>Next Project</Link></button>
    </div>
    {
      modalOn ?
      <div className='modalContainer'>
      <div ref={modalRef} className='modal'>
        <p className={'project-'+ projectToDescribe.name.replace(/\s+/g, '-')} style={{whiteSpace:"pre-wrap"}}>{projectToDescribe.fullDescription}</p>
        <button onClick={()=>setModalOn(false)}>Close</button>
      </div>
      <div className="modalBackground"></div>
      </div>
    : <></>
    }
    </div>
    :

    //PROJECT DOESNT EXIST
    <div className='projectNoExists'>
      <p> Project "{projectName}" doesnt exist</p>
      <button><Link to="/projects">Go back to projects</Link></button>
    </div>
  )
}

export default Project
