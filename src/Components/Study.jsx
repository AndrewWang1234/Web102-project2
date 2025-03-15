import {useState} from 'react';

const Study = ({ mode }) => {
  const states = [
    "Start", "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ];
  
  const stateCapitals = {
    "Start": "Press the next button to start the flashcards!",
    "Alabama": "Montgomery",
    "Alaska": "Juneau",
    "Arizona": "Phoenix",
    "Arkansas": "Little Rock",
    "California": "Sacramento",
    "Colorado": "Denver",
    "Connecticut": "Hartford",
    "Delaware": "Dover",
    "Florida": "Tallahassee",
    "Georgia": "Atlanta",
    "Hawaii": "Honolulu",
    "Idaho": "Boise",
    "Illinois": "Springfield",
    "Indiana": "Indianapolis",
    "Iowa": "Des Moines",
    "Kansas": "Topeka",
    "Kentucky": "Frankfort",
    "Louisiana": "Baton Rouge",
    "Maine": "Augusta",
    "Maryland": "Annapolis",
    "Massachusetts": "Boston",
    "Michigan": "Lansing",
    "Minnesota": "St. Paul",
    "Mississippi": "Jackson",
    "Missouri": "Jefferson City",
    "Montana": "Helena",
    "Nebraska": "Lincoln",
    "Nevada": "Carson City",
    "New Hampshire": "Concord",
    "New Jersey": "Trenton",
    "New Mexico": "Santa Fe",
    "New York": "Albany",
    "North Carolina": "Raleigh",
    "North Dakota": "Bismarck",
    "Ohio": "Columbus",
    "Oklahoma": "Oklahoma City",
    "Oregon": "Salem",
    "Pennsylvania": "Harrisburg",
    "Rhode Island": "Providence",
    "South Carolina": "Columbia",
    "South Dakota": "Pierre",
    "Tennessee": "Nashville",
    "Texas": "Austin",
    "Utah": "Salt Lake City",
    "Vermont": "Montpelier",
    "Virginia": "Richmond",
    "Washington": "Olympia",
    "West Virginia": "Charleston",
    "Wisconsin": "Madison",
    "Wyoming": "Cheyenne"
  };

  const [stateIndex, setState] = useState(0);
  const updateState = () => {
      const randStateIndex = Math.floor(Math.random() * (states.length - 1)) + 1;
      setState(randStateIndex); 
  };



  const [side, setSide] = useState(0);
  const updateSide = () => side == 0 ? setSide(1) : setSide(0);

  const nextButton = () => {
    updateState();
    setSide(0);
  }

  const flip = () => {
    const state = states[stateIndex]
    if(side == 0) {
      if(stateIndex == 0) {
        return <div className="card front" onClick={updateSide}><h1>{state}?</h1></div>  
      } else {
        return <div className="card front" onClick={updateSide}><h1>What's the capital of {state}?</h1></div>
      }
    } else {
      return <div className="card back" onClick={updateSide}><h1>{stateCapitals[state]}</h1></div>
    }
  }
  
  return (
    <div className="Study">
      <div className="header">
        <h6>Number of cards: 50</h6>
        <h6>{mode} mode</h6>
      </div>
      {flip()}
      <button onClick={nextButton}>Next</button>
    </div>
  )
}

export default Study