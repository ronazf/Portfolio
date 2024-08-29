import React, { useEffect, useState } from 'react';
import { urlFor, client } from '../../client.js';

import './Projects.scss'
import { ProjectDetails } from '../../types/clientTypes.js';
import AppWrap from '../../wrapper/AppWrap';

const Projects = () => {
  const [projects, setProjects] = useState<[]>([])

  useEffect(() => {
    const query = '*[_type == "projects"] | order(order asc)'

    client.fetch(query)
      .then((data: []) => {
        setProjects(data)
      })
      .catch((error: Error) => {
        console.log('Error fetching projects data:', error)
      })
  }, []);

  return (
    <section id='projects' className='app__projects app__flex'>
      <div className='app__projects-list'>
        {projects.map((projectObj: ProjectDetails, index: number) => (
          <div className='app__projects-box' key={index}>
            <div className='app__projects-box-logo'>
              <img src={urlFor(projectObj.image)} alt="logo" />
            </div>
            <div className='app__projects-box-title'>
              <p className='p-large-title-text'>{projectObj.name}</p>
            </div>
            <div className='app__projects-box-lang'>
              <p>{projectObj.languages}</p>
            </div>
            <div className='app__projects-box-desc'>
              <p className='p-desc-text'>{projectObj.description}</p>
            </div>
            <div className='app__projects-box-button'>
              <a href={projectObj.link} target='_blank' rel='noreferrer'>
                <button>
                  <p>View Source Code</p>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(Projects, 'projects')