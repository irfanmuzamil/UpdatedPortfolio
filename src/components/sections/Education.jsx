import React from 'react'
import styled from "styled-components"
import { education } from '../../data/constants'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import EducationCard from '../card/EducationCard'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`
const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width:100%;
max-width: 1100px;
gap:12px;
@media (max-width:960px){
flex-direction: column;
}
`
const Title = styled.div`
font-weight: 700;
font-size: 52px;
text-align: center;
margin-top: 20px;
color: ${({theme})=> theme.text_primary}
@media (max-width:768px){
margin-top: 12px;
font-size: 32px;
}
`
const Desc = styled.div`
font-weight: 100;
font-size: 20px;
text-align: center;
color: ${({theme})=> theme.text_primary};
@media (max-width:768px){
font-size: 16px;
}
`

const Education = () => {
  return (
    <Container id='Education'>
        <Wrapper>
            <Title>Education</Title>
            <Desc style={{
                marginBottom: "40px"
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Incidunt rerum deleniti magni iusto beatae? Minima et non in veritatis ab?
            </Desc>
            <VerticalTimeline>
                {education.map((item, index)=>(
                    <EducationCard
                    key={`education-${index}`}
                    education={item}/>
                ))}
            </VerticalTimeline>
        </Wrapper>
    </Container>
  )
}

export default Education