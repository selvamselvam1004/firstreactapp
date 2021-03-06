import React from "react";
import './App.css';
import logo from './logo.svg';



function Header(props){
  return( <header>
    <h1>Selvam {props.lastName}</h1>
    <h2>I am a {props.word} web developer</h2>
</header>);
}

function Section(props){
  
  return( 
  <section>
      
        <p>Hello, Everyone I  am interested web app development. I am done a 27 hours of full stack web development course has done in June 2021.</p>
        <h2>Key skills</h2>
         <ul>
        {props.skill.map((sk,i)=>(<li key={i}>{sk}</li>))}

        </ul> 
        <img src={logo} alt="Logo" />
   </section>
);

}

function Footer(props){
  
  return(<footer>
    <span>copyright @ {props.year} Selvam_AV</span>  
    </footer>);

}

const skill= ["Html","CSS","JavaScript","C","ReactJs"];


function App() {
  return (
    <div className="App">
      <Header lastName="A" word="Great" />
      <Section name="in building a" skill={skill} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}


export default App;
