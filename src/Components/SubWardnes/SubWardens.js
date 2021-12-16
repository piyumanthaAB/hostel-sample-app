import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import img1 from "./../../images/warden1.jpg";
import img2 from "./../../images/warden2.jpg";
import img3 from "./../../images/warden3.jpg"
import img4 from "./../../images/warden4.jpg"
import img5 from "./../../images/warden5.jpg"
import img6 from "./../../images/warden6.jpg"
import img7 from "./../../images/warden7.jpg"
import img8 from "./../../images/warden8.png"
import img9 from "./../../images/warden9.jpg"
import styled from 'styled-components';
const SubWardens = () => {
    const options = {
        items: 3,
        rewind: true,
        autoplay: true,
        loop:true,
        nav:false,
    };
    const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5% ;
    `
    const Sec = styled.div`
        flex-basis: 100%;
        padding: 0 5px;
        width: 100%;
        margin-bottom : 5%;
    `
    const Slider=styled.div`
        height: 450px;
        width: 300px;
        z-index: 2;
        border-radius: 10px;
        position: relative;
        padding: 1rem 2rem 2rem;
        background-color: #E5DFFF;
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
        ${'' /* margin-bottom: 40px; */}
        border-bottom: 3px solid #49483E;
        display: inline;
        letter-spacing: 0.2rem;
    `
    const H3 = styled.h3`
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
                <H1>Sub-Wardens</H1>
            </Sec>
            <Sec>
            <OwlCarousel options={options} id="carousel">
                <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    <SubSec>
                        <div>
                            <H3>Mrs. M. H. C. Priyadarshani</H3>
                            <P>Hostel : Wellamadama 01 Girls’ Hostel</P>
                            <P>Contact No : 0716721961</P>
                            <P>Email : </P>
                        </div>
                        <Sec1 >
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
                            <H3>Mrs. Shamini Karunarathne</H3>
                            <P>Hostel : Wellamadama 02 Girls’ Hostel</P>
                            <P>Contact No   : 0718560738</P>
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
                        <Img src={img3} alt="" />
                    </div>

                    <SubSec>
                        <div>
                            <H3>Mrs. Chamila Jayalal</H3>
                            <P>Hostel : Wellamadama 03 Girls’ Hostel</P>
                            <P>Contact No   : 0719364151</P>
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
                        <Img src={img4} alt="" />
                    </div>

                    <SubSec>
                        <div>
                            <H3>Ms. A. P. Hemanthi</H3>
                            <P>Hostel : Eliyakanda New Girls’ Hostel</P>
                            <P>Contact No   : 0714469525</P>
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
                        <Img src={img5} alt="" />
                    </div>
                    <SubSec>
                        <div>
                            <H3>Mrs. P Kumarasingha</H3>
                            <P>Hostel : Eliyakanda Old Girls’ Hostel</P>
                            <P>Contact No   : 0702519055 / 0705170647</P>
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
                        <Img src={img6} alt="" />
                    </div>
                    <SubSec>
                        <div >
                            <H3>Mrs. Nirmala Wijerathna</H3>
                            <P>Hostel : Pamburana 02 Girls’ Hostel</P>
                            <P>Contact No   : 0714994092</P>
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
                        <Img src={img7} alt="" />
                    </div>
                    <SubSec>
                        <div>
                            <H3>Mr. Srinath Dissanayake</H3>
                            <P>Hostel : Eliyakanda New & Old Boys’ Hostel</P>
                            <P>Contact No   : 0718153801</P>
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
                        <Img src={img8} alt="" />
                    </div>
                    <SubSec>
                        <div>
                            <H3>Mr. Chandana Samarawickrama</H3>
                            <P>Hostel : Meddawatta Boys’ Hostel</P>
                            <P>Contact No   : 0760575698 / 0715549398</P>
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
                        <Img src={img9} alt="" />
                    </div>
                    <SubSec>
                        <div>
                            <H3>Mr. Kularathna</H3>
                            <P>Hostel : Walauwatta Bikkhu Hostel</P>
                            <P>Contact No   : 0718336898 / 0710396105</P>
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
            </OwlCarousel>
            </Sec>
            
        </Des>
     );
}
 
export default SubWardens;