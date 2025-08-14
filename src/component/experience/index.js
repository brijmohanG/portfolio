import { MainHeading, ExperienceBackground, Paragraph, CardContainer, ExperienceContentContainer } from './styleComponent'


export const Experience = () => {

    return (
        <div>
            <ExperienceBackground>
            </ExperienceBackground>
            <ExperienceContentContainer>
            <CardContainer>
                <div>
                    <MainHeading>Teleperformance Global Services Private Limited  (Customer Service Associate) </MainHeading>
                    <Paragraph>
                        Gurgaon, 122001 Jan 2025 – Present
                    </Paragraph>
                </div>
                <div>
                    <MainHeading>Profile </MainHeading>
                    <Paragraph>
                        Providing product & services support, resolving customer’s issues & complains over the call,
                        <br /> maintaining confidentiality of the information,
                        <br /> providing quick resolution to the problem, processing orders & transactions
                    </Paragraph>
                </div>
            </CardContainer>
            <CardContainer>
                <div>
                    <MainHeading>Trident spark infotech (Freelance Backend developer)   </MainHeading>
                    <Paragraph>
                        Indore, Madhya Pradesh Sep 2023 – Apr 2024 
                    </Paragraph>
                </div>
                <div>
                    <MainHeading>Profile </MainHeading>
                    <Paragraph>
                        I contributed to the LaneAxis project as a backend developer, harnessing the power of Node.js, Express, PostgreSQL, and Sequelize. My role involved 
designing and developing new APIs, integrating them seamlessly into the existing codebase, and meticulously resolving bugs to enhance system 
functionality and performance. 
                    </Paragraph>
                </div>
            </CardContainer>
            </ExperienceContentContainer>
        </div>
    )
}