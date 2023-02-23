import styled from 'styled-components'

export const ProjectTag = ({ tag }: { tag: string }) => {
  return <Tag>{tag}</Tag>
}

const Tag = styled.span`
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
`
