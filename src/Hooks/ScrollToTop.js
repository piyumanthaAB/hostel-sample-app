// import {  faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaLongArrowAltUp } from "react-icons/fa";
const ScrollToTop = (props) => {

    const Icon = styled.div`
        &{
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 1.5rem;
            cursor: pointer;
            border: none;
            border-radius: 50%;
            ${'' /* color:#339BFF; */}
            z-index: 4;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            color: white;
            font-weight: 1rem;
            background: linear-gradient(to right, #33ccff 0%, #3363ff 100%);
            transition: all .2s;
    }
    ${'' /* &:active{
        transform: scale(0.8);
    } */}
    &:hover{
        transform: scale(1.1);
    }
    
    `

    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 200){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return ( 
        <div>
            {ScrollToTop && <Icon onClick = {scrollToTop}>
                    {/* <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                     */}
                <FaLongArrowAltUp/>
                </Icon> }
        </div>
     );
}
 
export default ScrollToTop;