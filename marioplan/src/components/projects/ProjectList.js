import React from 'react'
import ProjectSummary from './ProjectSummary'
import projectReducer from '../../store/reducers/projectReducer';


const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
          { projects && projects.map(project => {
              return(
                <ProjectSummary project={project} key = {project.id} />
              )
            })
          }
        </div>
    )
}

export default ProjectList