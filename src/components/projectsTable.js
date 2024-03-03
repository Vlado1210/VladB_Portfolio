import React, { useState } from 'react'
import { data }  from '../assets/projectinfo'
import './projectsTable.css'
import { Link } from 'react-router-dom';

const ProjectsTable = () => {

  const [activeTab, setActiveTab] = useState("Frontend")

  const frontendProjects = data.filter((project)=>project.category === "Frontend")
  const aiProjects = data.filter((project)=>project.category === "AI")
  const videogamesProjects = data.filter((project)=>project.category === "Videogames")
  const [ tabContent, setTabContent ] = useState(frontendProjects)


  return (
    <div className='container projectTableContainer'>
      <div className='tabsHead'>
      <header onClick={()=>{setActiveTab("Frontend"); setTabContent(frontendProjects)}} className='header1'>
        <div className={activeTab === "Frontend" ? "tab-head active" : "tab-head"}>Frontend</div><div className="tab-head-bottom"></div>
      </header>

      <header onClick={()=>{setActiveTab("AI"); setTabContent(aiProjects)}} className='header2'>
        <div className={activeTab === "AI" ? "tab-head active" : "tab-head"}>AI/ML</div><div className="tab-head-bottom"></div>
      </header>

      <header onClick={()=>{setActiveTab("Videogames"); setTabContent(videogamesProjects)}} className='header3'>
        <div className={activeTab === "Videogames" ? "tab-head active" : "tab-head"}>Videogames</div><div className="tab-head-bottom"></div>
      </header>
      </div>
      <div className='tab-content'>
        {tabContent.map((project)=>{
            return(
              <Link className='link' to={`/project/${project.name}`}>
                <div className='projectRow'>
                    <div className='item text'><h1>{project.name}</h1><p>{project.description}</p>
                    {project.date}</div>
                    <div className='item img'> <img src={project.image} alt='Project'/>
                    </div>
                </div>
                </Link>
            )
        })}
        </div>

</div>



  )
}

export default ProjectsTable