import { ProfileBackground, ProfileImage, ProfileImageContainer, ProfileBackgroundContentContainer,MainHeading,Paragraph } from "./styleComponent"

export const Profile = () => {
    return (
        <div>
                <ProfileBackground>
                    <ProfileImageContainer>
                        <ProfileImage src="https://i.postimg.cc/FYzTv43r/Whats-App-Image-2025-08-09-at-12-19-46.jpg" alt="profile" />
                    </ProfileImageContainer>
                </ProfileBackground>
                <ProfileBackgroundContentContainer>
                    <div>
                        <MainHeading>Brijmohan Gautam</MainHeading>
                        <Paragraph>Full Stack Developer | CCBPian at NxtWave | HTML5,CSS,Javascript,Bootstrap,SQL,React.Js,Node.Js</Paragraph>
                    </div>
                    <div>
                        <MainHeading>About</MainHeading>
                        <Paragraph>At NxtWave's CCBP 4.0 Intensive, I have to learn fullstack development with a
                            specialzation in 4.0 technologies.<br/> In love with the coding challenges and hands-on projects.
                            With industry's first ever IRC 4.0, <br/> getting ready to take on new challenges in the tech world.
                        </Paragraph>
                    </div>
                    <div>
                        <MainHeading>Home Towon</MainHeading>
                        <Paragraph>
                            Village- Ujeni post-kalwaliya distict-Satna(M.P.), 485226
                        </Paragraph>
                    </div>
                    <div>
                        <MainHeading>Current Location</MainHeading>
                        <Paragraph>
                            Gugram Haryana, 
                        </Paragraph>
                    </div>
                </ProfileBackgroundContentContainer>
            
        </div>
    )
}