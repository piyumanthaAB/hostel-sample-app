import React from 'react';
import Cover from '../Components/Cover/Cover'; 
import Facilities from '../Components/Facilities/Facilities';
import Gallery from '../Components/Gallery/Gallery';
import Rules from '../Components/Rules/Rules';
import News from '../Components/News/News';
import SubWardens from '../Components/SubWardnes/SubWardens';


const Home = (props) => {
    return (
        <div className="container">
         <Cover Cover1text= {props.Covertext} />
         <Facilities />
         <Rules />
         <Gallery />
         <News />
         <SubWardens/>
         
         
        </div>
    );
}
 
export default Home;