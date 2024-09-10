import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { urlFor, client } from '../../client.js';

import './Skills.scss';
import { SkillDetails } from '../../types/clientTypes.js';
import AppWrap from '../../wrapper/AppWrap';

const Skills = () => {
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "skills"]'

    client.fetch(query)
      .then((data: []) => {
        setSkills(data)
      })
      .catch((error: Error) => {
        console.log("Error fetching skills data: ", error)
      })
  }, [])

  return (
    <section id='skills' className='app__skills app__flex'>
      <div className='app__skills-row'>
        <Marquee direction={"right"} autoFill={true}>
          {skills.map((skillObj: SkillDetails, index: number) => (
            <div className='app__skills-obj' key={index}>
              <img src={urlFor(skillObj.image)} alt={skillObj.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default AppWrap(Skills, 'skills');