import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FooterBackgroundContainer } from "./styleComponent"

export const Footer = () => {
    const handleRedirectLink = () => {
    window.open("https://www.linkedin.com/in/brijmohan-gautam-29825b9a/", "_blank");
  };
    const handleRedirectGit = () => {
    window.open("https://github.com/brijmohanG/portfolio/tree/main/src", "_blank");
  };

    return (
        <FooterBackgroundContainer>
            <div>
                <FaGithub style={{ color: "yellow", fontSize: "40px", cursor: "pointer" }} onClick={handleRedirectGit}/>
            </div>
            <div>
                <FaLinkedinIn style={{ color: "yellow", fontSize: "40px", cursor: "pointer"}}  onClick={handleRedirectLink}/>
            </div>
        </FooterBackgroundContainer>
    )
}