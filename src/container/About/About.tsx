import React, { useState, useEffect } from 'react';
import { urlFor, client } from '../../client.js';

import './About.scss'
import { AboutDesc, Experience } from '../../types/clientTypes';
import AppWrap from '../../wrapper/AppWrap';

const About = () => {
  const [about, setAbout] = useState<[]>([])
  const [experience, setExperience] = useState<[]>([])

  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query)
      .then((data: []) => {
        setAbout(data)
      })
      .catch((error: Error) => {
        console.error('Error fetching about data:', error);
      })
  }, []);

  useEffect(() => {
    const query = '*[_type == "experience"] | order(order asc)';

    client.fetch(query)
      .then((data: []) => {
        setExperience(data)
      })
      .catch((error: Error) => {
        console.error('Error fetching experience data:', error);
      });
    console.log(experience)
  }, []);

  return (
    <section className='app__about app__flex'>
      {about.map((aboutObj: AboutDesc, index: number) => (
        <div className='app__about-overview' key={index}>
          <div className='app__about-img'>
            <img src={urlFor(aboutObj.image)} alt="Ronaz Farahmand" />
          </div>
          <div className='app__about-intro'>
            <div className='tertiary-text app__about-intro-name'>
              <p>I’m Ronaz</p>
            </div>
            <div className='app__about-intro-desc secondary-text'>
              <p>
                {aboutObj.description}
              </p>
              <p>
                {aboutObj.goals}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className='app__about-experience'>
        {experience.map((experienceObj: Experience, divIndex: number) => (
          <div className='app__about-experience-box' key={divIndex} style={{ backgroundColor: experienceObj.color }}>
            <div className='app__about-experience-logo'>
              <img src={urlFor(experienceObj.image)} alt="logo" style={{ margin: experienceObj.margin }} />
            </div>
            <div className='app__about-experience-intro'>
              <p>{experienceObj.name}</p>
              <p>{experienceObj.duration}</p>
            </div>
            <div className='app__about-experience-lang'>
              <p>{experienceObj.languages}</p>
            </div>
            <div className='app__about-experience-desc'>
              <ul>
                {experienceObj.description.map((element: string, index: number) => (
                  <li key={index}>
                    <p>
                      {element}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(About, 'about')