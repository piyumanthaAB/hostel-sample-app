import RulesRegulation from "../Components/Rules/Rules&Regulation";
import Cover from "../Components/Cover/Cover";
const RulesandRegulation = (props) => {
    return ( 
        <div className="container">
            <Cover Cover1text= {props.Covertext} />
            <RulesRegulation/>
        </div>
        
     );
}
 
export default RulesandRegulation;