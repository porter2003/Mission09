import './App.css'

import data from './CollegeBasketballTeams.json';

console.log(data);

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome(){
  return (
    <h1>Welcome to March Madness College Info!</h1>
  )
}
function School({school, name, city, state}:{school: string; name:string; city:string; state:string;}){

  return (
    <>
    <h2>Team Card </h2>
    <h4>School name: {school}</h4>
    <h4>Mascot: {name}</h4>
    <h4>Location: {city}, {state}</h4>
    <br></br>
    </>
  )
}
function SchoolList(){
  return (
    <>
    {
      data.teams.map((singleSchool:Team, index:number) => (
      <School {...singleSchool} />
    ))

    }
    </>
  );
}


function App() {

  return (
    <>
      <Welcome/>
      <SchoolList/>
    </>
  )
}

export default App
