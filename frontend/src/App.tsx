import './App.css'

// Json import
import data from './CollegeBasketballTeams.json';

// Define properties of Team object
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

// Header
function Welcome(){
  return (
    <h1>Welcome to March Madness College Info!</h1>
  )
}

// School function to display card
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

// Map through each team and show team card
function SchoolList(){
  return (
    <>
    {
      data.teams.map((singleSchool:Team) => (
      <School {...singleSchool} />
    ))

    }
    </>
  );
}

// Main function
function App() {
  return (
    <>
      <Welcome/>
      <SchoolList/>
    </>
  )
}

export default App
