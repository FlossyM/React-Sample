import React from 'react';
import Skills from './skills.js';

//This is a simple React components application in Node.js environment. 
//This application runs on localhost:3000 port
//Styling in Progress
                        
class Intro extends React.Component{
    render() {
  
        return ( < div >
            < h2 > {
                this.props.name
            } < /h2>
      
        < /div >
    );
}
}

//This is a main UI component which clubs other components .                  
//Data is available to each component through props.
                        
class Custom extends React.Component{
    render() {
        return ( < div >
            
            <Intro name = {
                this.props.introData.name
            }/> 
             <div  class="desP"><p>{this.props.introData.description}</p></div>  
            < Skills skilList = {
            this.props.introData.skills
        }
        /> < /div >
    );
}
}
                    
export default Custom;