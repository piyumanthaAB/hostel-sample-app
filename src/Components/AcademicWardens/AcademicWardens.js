import styled from 'styled-components';
import img1 from "./../../images/image036.jpg";
import img2 from "./../../images/image038.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
const AcademicWardens = () => {
    const Des = styled.div`
        display: block;
    `
    const Sec = styled.div`
        ${'' /* padding: 0 5px; */}
        width: 100%;
        margin-bottom : 5%;
        display: flex;
        justify-content: center;

    `
    const Slider=styled.div`
        height: 450px;
        width: 300px;
        z-index:0;
        border-radius: 10px;
        position: relative;
        padding: 1.5%;
        background-color: #E5DFFF;
        margin: 0 3%;
    `
    const Img = styled.img`
        width: 300px;
        height: 250px;
        border-radius: 10px;
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #339BFF;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        border-bottom: 3px solid #49483E;
        display: inline;
        letter-spacing: 0.2rem;
    `
    const H3 = styled.h4`
        ${'' /* color: #000; */}
        color: #333;
        margin: 10px;
        text-align: left;
    `
    const P = styled.p`
        font-size: 15px;
        color: #000;
        text-align: left;
        font-weight: 700;
        margin-left: 10px;
    `
    const Sec1 = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Icon = styled.div`
        &{
        font-size: 30px;
        padding: 10px;
        cursor: pointer;
        color: #777;
        }
        &:active{
            transform: scale(0.8);
        }
    `
    const SubSec = styled.div`
        margin: 10% 0;
    `
    return (  
        <Des>
            <Sec>
                <H1>Academic-Wardens</H1>
            </Sec>
            <Sec>
            <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    
                    <SubSec>
                        <div>
                            <H3>Dr. K. A. Sunanda. Kodikara-Arachchi </H3>
                            <P>Contact No   : </P>
                            <P>Email        :</P>
                        </div>
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
                    </SubSec>  
                </Slider>
                <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img2} alt="" />
                    </div>
                    
                    <SubSec>
                        <div>
                            <H3>Dr. W. S. Hemalika</H3>
                            <P>Contact No   : </P>
                            <P>Email        :</P>
                        </div>
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
                    </SubSec>  
                </Slider>
            </Sec>
        </Des>
    );
}
 
export default AcademicWardens;