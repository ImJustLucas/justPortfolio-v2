import styled from 'styled-components'
import { ProjectType } from '@typesDef/project'
import { ProjectHeader } from '@components/Project/ProjectHeader'
import { ProjectTag } from '@components/Project/ProjectTag'

export const ProjectCard = ({ project }: { project: ProjectType }) => {
  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <WorkCardContainer onClick={handleClick}>
      <ProjectHeader header={project.header} />
      <TagContainer>
        {project.tags.map((tag, index) => (
          <ProjectTag key={index} tag={tag.name} />
        ))}
      </TagContainer>
      <Subtitle>Role</Subtitle>
      <p>{project.role}</p>
      <Subtitle>Description</Subtitle>
      <p>{project.description}</p>
    </WorkCardContainer>
  )
}

const WorkCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 45%;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;

  @media (max-width: 1156px) {
    width: 70%;
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;
  gap: 10px;
`
const Subtitle = styled.h4`
  font-size: 20px;
  font-weight: 400;
  font-style: normal;
  margin: 10px 0;
`
