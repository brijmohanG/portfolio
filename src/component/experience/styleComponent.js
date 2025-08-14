// https://i.postimg.cc/vBm34j3R/climber-9491285-1920.png
import styled from "styled-components";


export const ExperienceBackground = styled.div`
    background-image: url("https://i.postimg.cc/vBm34j3R/climber-9491285-1920.png");
    background-size: cover;
    color: #ffffff;
    height: 50vh;
    margin-bottom: 20px;

    @media (max-width: 768px) {
    
        height: 30vh;
        
    }

`
export const MainHeading = styled.h1`
    font-size: 18px;

`

export const ExperienceContentContainer = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    display:flex;
    justify-content: space-around;

    @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: column;
    height:110vh;
    justify-content: flex-start;
  }

`

export const Paragraph = styled.p`
    font-size: 14px;
    color: #494949;
`

export const CardContainer = styled.div`
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    width: 350px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom:20px;

`