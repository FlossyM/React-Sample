import React from 'react';
import ReactDOM from 'react-dom';
import Custom from './app.js';

//This is a custom built JSON object which is parsed and bound to the different components 

var jsonData = {
    name: 'Flossy Priya Mascarenhas',
    description :"Over 5 years of experience as a Developer in IT and Software Industry. Proficient in Front end development using HTML5, JavaScript, JQuery, jQuery mobile, Angular.js, Bootstrap, Express-Node.js, React.js. Demonstrated experience in VB.Net windows applications and C#. Strong background in Agile- Scrum methodologies and clear understanding of SDLC. Knowledge and experience in different version control and project tracking tools like SVN, JIRA, Git etc.",
    skills: [{
		"name":"HTML5",
		"rate":"8"
		}, 
		{
		"name":"CSS",
		"rate":"7"
		}, 
		{
			"name":"C++",
             "rate":"8"
		}, 
		{
			"name":"C#",
		    "rate":"8"
		}, 
		{ 
		    "name":"Angular.js",
		     "rate":"7"
		},
		{ 
		   "name":"Node.js",
		    "rate":"7"
		},
		{
			"name":"React.js",
			"rate":"8"
		}, 
		{
			"name":"Bootstrap",
			"rate":"8"
		}, 
		{
			"name":"R Programming",
			"rate":"7"
		}, 
		{
            "name":"Javascript",
            "rate":"8"
		}, 
		{
             "name":"Jquery",
             "rate":"8"
		}
		]
}


//UI component binding to the main container
ReactDOM.render(<Custom introData = {jsonData}/>, document.getElementById('mainContent'));
                
                
