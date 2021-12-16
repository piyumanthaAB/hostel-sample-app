import styled from "styled-components";
import PDF from "./../../pdf/Rules&Regulations.pdf";
const RulesRegulation = () => {
const RulesContainer = styled.div`
  width: 100%;
  ${'' /* background:#E5DFFF; */}
  background-color: white;
  padding-top: 10%;
`
const Head = styled.div`
        letter-spacing:8px;
        text-align: left;
        font-size: 40px;
        color: #339BFF;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        ${'' /* margin-bottom: 20px; */}
        border-bottom: 3px solid #49483E;
        display: inline;
`
const RulesBody = styled.div`
  margin-top: 1%;
  padding: 5%;
  font-weight: 600;
`
const Rules = styled.div`
  text-align:left;
  padding-bottom: 3%;
`
const Desc = styled.h4`
  text-align: center;
  padding-bottom: 3%;
  font-size: 25px;
  font-style: italic;
`
    return ( 
    <RulesContainer>
      <Head data-aos="fade-up">Rules & Regulations</Head>
      <RulesBody>
        <Desc>In general, a set of <a rel="noreferrer" target="_blank" href={PDF}>rules and regulations</a> are formulated for residential students to abide by.  Students are strictly bound to follow the rules and regulations and that gives benefits to both students and the University. Common conditions and rules are given below for residential students. </Desc>
        <Rules data-aos="fade-right"><li>Prior to occupying the room, each student should check the goods in the room and its (working) condition and sign the register. All students occupying the rooms are jointly responsible for the contents of rooms. Any goods given should not be removed from the hostel. Any other goods, though permitted within university premises, should not be admitted to rooms.</li></Rules>
        <Rules data-aos="fade-right"><li>Resident students should occupy the rooms assigned to them and should not change rooms without the permission of the authority .</li></Rules>
        <Rules data-aos="fade-right"><li>Furniture, equipment, lamps, wires, walls doors and windows in the rooms should not be damaged or defaced. Any such damages will be charged from relevant students. </li> </Rules>
        <Rules data-aos="fade-right"><li>In any case/emergency, keys of the rooms and other goods are to be personally handed over to the sub-wardens. All personal belongings should be handled according to the instructions given by sub-wardens. </li></Rules>
        <Rules data-aos="fade-right"><li>It is advised that students maintain silence and discipline within hostel premises and be attentive not to make any disturbance to others including neighbors. If such happens, disciplinary actions will be taken against the relevant students.</li> </Rules>
        <Rules data-aos="fade-right"><li>All resident students are advised to dress properly whenever they are in common areas of the hostel or visiting the offices.</li></Rules>
        <Rules data-aos="fade-right"><li>Identity cards issued by the University, should always be kept with students and should be produced whenever necessary. </li> </Rules>
        <Rules data-aos="fade-right"><li>Students are strictly advised to follow health guidelines stipulated by the University during this pandemic period. </li></Rules>
      </RulesBody>
    </RulesContainer>
     );
}
 
export default RulesRegulation;