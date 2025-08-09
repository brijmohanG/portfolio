// postimage url for image store
import { EducationBackground,EducationContentContainer,MainHeading, CardContainer } from './styleComponent'

export const Education = () => {
    return (
        <div>
            <EducationBackground>
            </EducationBackground>
            <div>
                <EducationContentContainer>
                    <CardContainer>
                        <MainHeading>Nextwave Disruptive technologies</MainHeading>
                        <p>Industry Ready Certificate in Full-stack development</p>
                    </CardContainer>
                    <CardContainer>
                        <MainHeading>Institute of engineering, Jiwaji university, Gwalior</MainHeading>
                        <p>B.E. Chemical Engineering (64.5%)</p>
                    </CardContainer>
                    <CardContainer>
                        <MainHeading>Govt. boys H S School, Satna(M.P.)</MainHeading>
                        <p>Intermediate_MP Board (70.6%)</p>
                    </CardContainer>
                    <CardContainer>
                        <MainHeading>Saraswati shishu mandir H S School, Satna(M.P.)</MainHeading>
                        <p>Secondary School Of Certificate (75%)</p>
                    </CardContainer>
                </EducationContentContainer>
            </div>

        </div>
    )
}