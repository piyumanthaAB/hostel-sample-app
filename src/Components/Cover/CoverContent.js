import styled from 'styled-components';

const CoverContent = (props) => {
        const Sec = styled.div`
        position: absolute;
        top: 20%;
        z-index: 2;
        display: flex;
        justify-content: left;
        margin-left:100px;
        flex-wrap: wrap;
    `
    const Divsec = styled.div`
        flex-basis: 80%;
        margin: 0 0px 20px 35px ;
        
    `
    const H1 = styled.h1`
        font-size: 45px;
        color: #FFF;
        text-align: left;
        width: 800px;
        letter-spacing:3px;
    `
    const HR = styled.hr`
        width: 20%;
        height: 3px;
        background: #FFF;
        border: none;
        margin-bottom: 10px;
        margin-left:0%;
    `
    const P = styled.p`
        text-align:justify;
        color: #FFF;
        width:600px;
    `

    return ( 
            <Sec data-aos="fade-right">
                <Divsec>   
                    <H1>{props.text.header}</H1>
                    <HR />
                </Divsec>
                <Divsec>
                    <P>{props.text.desc}</P>
                </Divsec>
                
            </Sec>
     );
}
 
export default CoverContent;