import styled from 'styled-components'

import { ProjectCard } from '@components/ProjectCard'
import projects from '@data/projects'

export default function About() {
  return (
    <WorkContainer>
      <TitleSection>This is what I created</TitleSection>
      <ProjectContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectContainer>
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
  padding: 70px 100px 0 70px;

  @media (max-width: 768px) {
    padding: 70px 50px 0 50px;
  }
`

const TitleSection = styled.h2`
  font-size: 42px;
  font-family: 'Cormorant Unicase', serif;
  font-weight: 400;
  font-style: normal;
  line-height: 50px;
  margin-bottom: 80px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`
