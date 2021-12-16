import styled from "styled-components";
import CountUp from 'react-countup';
import { useState,useEffect } from "react";
const Facilities = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 3% 0;
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #339BFF;
        letter-spacing:8px;
        font-weight: bold;
        position: relative;
        left: 0;
        display: inline;
        border-bottom: 3px solid #49483E;
    `
    const MainSubSec = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `
    const Sec = styled.div`
        flex-basis: 100%;
        margin: 20px 10px;
        width: 100%;
    `
    const SubSec = styled.div`
        margin: 15px;
    `
    
    const H2 = styled.h2`
        margin: 10px 10px 20px 10px;
        font-size:50px;
        font-weight:400;
    `
    const P = styled.p`
        font-size: 30px;
        text-align: center;
        letter-spacing:6px;
        color:#484747;
        margin-top:20px;
    `
    const P1 = styled.p`
    font-size: 18px;
    text-align: center;
    width: 80%;
    position: relative;
    left:10%
    `
    const HR1 = styled.h1`
        width:80%;
        height:3px;
        background: #49483E;
        position:relative;
        //margin-left:44%
    `
    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset >= 400){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, []);
    return ( 
        <Div>
            <Sec>
                <H1>Hostel Facilities</H1>
            </Sec>
            <Sec>
                <P1>The University hostels provide enormous facilities aiming at creating a good learning environment for residential students. Internal hostels are equipped with high standard bed rooms, meeting area, common area, playing area (carom) and canteen. For each room (depending on number of students), two studying tables/chairs and towel racks are provided.  In addition, good number of dustbins are placed for proper waste disposal. </P1>
            </Sec>
            <Sec>
                <MainSubSec>
                <SubSec>
                    <H2>{ScrollToTop && <CountUp end={10} duration={1}/> }</H2>
                    <P>Faculties</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <CountUp end={6547} duration={1}/> }</H2>
                    <P>Students</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <CountUp end={15} duration={1}/> }</H2>
                    <P>Sub-Wardens</P>
                </SubSec>
                </MainSubSec>
            </Sec>
            <HR1 /> 
        </Div>
     );
}
 
export default Facilities;