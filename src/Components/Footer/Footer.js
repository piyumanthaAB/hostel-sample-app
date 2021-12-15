import React from "react";
import img from "../../images/unilogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterName,
  FooterBody,
  FooterCompany,
  FooterServices,
  FooterAccount,
  FooterEmail,
  FooterBottom,
  FooterLogo1,
  Logo,
  Sec1,
  Sec2,
  Icon,
  HR,
  P
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
       <Logo>  
      <FooterLogo1 src={img} alt="" /> 
      </Logo> 
        <FooterLogo>
          <FooterName>University of Ruhuna</FooterName>
        </FooterLogo>
        <FooterBody>
          <FooterCompany>
            PRIVACY
            
          </FooterCompany>
          <FooterServices>
            SERVICES
            
          </FooterServices>
          <FooterAccount>
            ABOUT OS
            
          </FooterAccount>
          <FooterEmail>
            CONTACT US
            
          </FooterEmail>
        </FooterBody>
      </FooterTop>
      <FooterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quam libero consectetur eum incidunt esse, tempora fugit architecto obcaecati hic temporibus voluptates blanditiis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae suscipit. Prov fuga dicta modi
      </FooterBottom>
      <Sec1>
        <Icon>
            <FontAwesomeIcon icon={faFacebook}/>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faTwitter}/>
         </Icon>
         <Icon>
            <FontAwesomeIcon icon={faLinkedin}/>
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faInstagram}/>
        </Icon>
      </Sec1>
      <Sec2>
        <HR/>
        <P>© 2021 Department of Computer Science. | All Rights Reserved.</P>
      </Sec2>
    </FooterContainer>
  );
};

export default Footer;
