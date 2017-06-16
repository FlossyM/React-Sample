import React from 'react';
import ReactDOM from 'react-dom';

//This component uses HTML5 slider feature to mark the proficiency of the skills
//JSON object is parsed and key value pairs retrived and mapped to the sliders

class Skills extends React.Component{
        render() {
  
        var skillset = this.props.skilList.map(function (skill,index) {
                return ( <div id="skillDiv"> <li key = {
                        index
                    } > {
                        skill.name
                    } < /li>
                    <input class="sliders" type ="range" min ="1" max="10" step ="1" value={skill.rate} />
                    </div>
                       );                            
                });
            return ( < div >
                  < ul > {
                    skillset
                } < /ul> < /div >

        );
    }
}
                                               
                                                                   
export default Skills;