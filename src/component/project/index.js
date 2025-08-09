import { MainHeading,ProjectBackground,Paragraph, CardContainer } from "./styleComponent"

export const Project = ()  => {
    const handleRedirect = () => {
    window.open("https://nwikipedia.ccbp.tech", "_blank");
  };
    return(
        <div>
            <ProjectBackground></ProjectBackground>
            <CardContainer onClick={handleRedirect} style={{ cursor: "pointer" }}>
                <MainHeading>Wikipedia Search Application</MainHeading>
                <Paragraph>Unlock the vast wealth of knowledge on Wikipedia with a custom search application
                    that delivers relevant and curated results. Quick and easy access to 
                    information has never been easier.
                </Paragraph>
                <MainHeading>Key Contributions: </MainHeading>
                <ul>
                    <li>
                        <Paragraph>
                            Beautifully presented search results with HTML list elements, styled with CSS, Bootstrap, and a responsive design that adapts to 
                            any device. 
                        </Paragraph>
                    </li>
                    <li>
                        <Paragraph>
                            Seamlessly access information with the power of asynchronous fetch GET HTTP API calls and the ability to open the desired 
                            result in a new tab for further reading.  
                        </Paragraph>
                    </li>
                </ul>
                <MainHeading>Technologies used: </MainHeading>
                <Paragraph>
                    HTML, CSS, JS, REST API Calls, Bootstrap  
                </Paragraph>
                <MainHeading>Link: </MainHeading>
                <Paragraph>
                    nwikipedia.ccbp.tech
                </Paragraph>
            </CardContainer>
        </div>
    )
}