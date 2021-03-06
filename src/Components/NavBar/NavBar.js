import styled from "styled-components";
import img from "./../../images/unilogo.png";
import { Link } from "react-router-dom";
// import { useState,useEffect } from "react";
const Navbar = () => {
    const Navbar=styled.div`
        display: block;
        margin: 0;
        
    `
    const Nav=styled.nav`
        display: flex;
        position: fixed;
        justify-content: space-between;
        background:#339BFF;
        height: 100px;
        width: 100%;
        z-index: 2;
    `
    const Links = styled.div`
        margin: 10px 5px;
        display: flex;
        align-items: center;
    `
    const Ul=styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0px 20px;
    `
    const LinksH1=styled.h1`
        margin-left:100px;
        color:#FFF;
        text-align:left;
        letter-spacing:2px;
        font-weight:600px;
    `
    const Li=styled.li`
    &{
        display: inline-block;
        padding: 0 10px;
        margin: 0 10px;
        font-size: 20px;
        color: white;
        font-family: 'PT Sans', sans-serif;
        cursor: pointer;
        position: relative;
        /* font-family: "Roboto", sans-serif; */
        /* font-weight:100; */
        letter-spacing: .1rem;
    }
    &:hover .Ho{
        width: 50%;
    }
    `
    const Logo = styled.img`
        width: 60px;
        height: 80px;
        position: absolute;
        margin-left:15px;
    `
    const Span = styled.span`
    &{
        width: 0%;
        height: 2.5px;
        position: absolute;
        top: 80%;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        background: #FFF;
        z-index: -1;
        transition: 0.5s;
    }
    `
    
    const scrollToTop = ()=>{
        if(window.pageYOffset > 200){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
    return ( 
        <Navbar>
            <Nav>
                <Links>
                    <Logo src={img} alt="" /> 
                    <LinksH1>University Of Ruhuna<br />Hostel Management System</LinksH1>
                </Links>
                
               <Links>
                    <Ul>
                        <Li className="li" onClick={scrollToTop}><Link to ="/">Home<Span className="Ho"></Span></Link></Li>
                        <Li className="li" onClick={scrollToTop}><Link >Facilities<Span className="Ho"></Span></Link></Li>
                        <Li className="li" onClick={scrollToTop}><Link to ="/RulesandRegulation">Rules & Regulations<Span className="Ho"></Span></Link></Li>
                        <Li className="li" onClick={scrollToTop}><Link >Maintenance<Span className="Ho"></Span></Link></Li>
                        <Li className="li" onClick={scrollToTop}><Link >Contact Us<Span className="Ho"></Span></Link></Li>
                    </Ul>
                </Links>
            </Nav>
        </Navbar>
     );
}
 
export default Navbar;