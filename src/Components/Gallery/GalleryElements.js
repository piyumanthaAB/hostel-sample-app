import styled from "styled-components";


export const GallaryContainer =styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 5% ;
    
`

export const GallaryHeader =styled.div`
        letter-spacing:8px;
        text-align: center;
        font-size: 40px;
        color: #339BFF;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        margin-bottom: 40px;
        border-bottom: 3px solid #49483E;
        display: inline;
`
export const GallaryRows =styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background:#E5DFFF;
   margin:0 55px;
   padding: 5% 0;
   border-radius:10px;
   box-shadow: 0px 10px 20px 2px #0000005d;
   margin-top: 3%;
`
export const GallaryFirstRow =styled.div`
    display: flex;
    align-items: center;
    margin-bottom:10px;
`
export const GallatyImgContainer =styled.div`
    width: 33%;
`
export const GallaryImg =styled.img`
    &{  width: 350px;
        height: 350px;
        //padding: 10px;
        margin: 10px 40px;
        border-radius:40px;
        transition: 0.3s;
    }
    &:hover{
        transform: translateY(-10px);
        cursor: pointer;
    }

`
