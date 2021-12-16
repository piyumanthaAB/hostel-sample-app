import React from 'react';
import Cover from '../Components/Cover/Cover'; 
import Facilities from '../Components/Facilities/Facilities';
import Gallery from '../Components/Gallery/Gallery';
import News from '../Components/News/News';
import SubWardens from '../Components/SubWardnes/SubWardens';
import AcademicWardens from '../Components/AcademicWardens/AcademicWardens';


const Home = (props) => {
    return (
        <div className="container">
         <Cover Cover1text= {props.Covertext} />
         <Facilities />
         <Gallery />
         <News />
         <AcademicWardens/>
         <SubWardens/>
         
        </div>
    );
}
 
export default Home;