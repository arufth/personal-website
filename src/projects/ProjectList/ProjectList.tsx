
import React from 'react'
import { Divider } from '../../components'
import { Project } from '.././'
import { projects } from '.././projects.json'

export const ProjectList: React.FC = () => {
  return (
    <section className='mainText projects'>
      {
            projects.map(project => (
              <React.Fragment key={project.id}>
                <Project
                  project={project}
                />
                <Divider />
              </React.Fragment>
            ))
          }
    </section>
  )
}
