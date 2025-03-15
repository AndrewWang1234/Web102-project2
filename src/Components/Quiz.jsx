import {useEffect, useState} from 'react';

const Quiz = ({ mode }) => {
  const [states, setStates] = useState([
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
    "Wisconsin", "Wyoming"
  ]);
  
  const stateCapitals = {
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

  const [number, setNumber] = useState(0);
  const [shuffledStates, setShuffledStates] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState("");
  const [correct, setCorrect] = useState(0);
  const [right, setRight] = useState("");
  const [side, setSide] = useState(0);
  
  const updateSide = () => side == 0 ? setSide(1) : setSide(0);

  useEffect(() => {
    const shuffleArray = (arr) => {
        for (let i = arr.length - 1; i>= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;
    };
    
    const answersArray = (arr) => {
        let answers = [];
        for(let i = 0; i < arr.length; i++) {
            answers.push(stateCapitals[arr[i]].toLowerCase());
        }
        return answers;
    }

    const shuffled = (shuffleArray([...states]))

    setShuffledStates(shuffled);
    setAnswers(answersArray(shuffled))
  }, []);


    const question = () => {
        const state = shuffledStates[number - 1]
        if (number == 0) {
            return <div className='card front'><h1>Enter the word "Start" and click next to Begin!</h1></div>
        } else if (number > 50) {
            return <div className="card front"><h1>Final Score: {correct}</h1></div>
        } else {
            if(side == 0) {
                console.log('1');
                return <div className="card front" onClick={updateSide}><h1>What's the capital of {state}?</h1></div>
                
            } else {
                console.log('2');
                return <div className="card back" onClick={updateSide}><h1>{stateCapitals[state]}</h1></div>
            }
        } 
    }
    
    
    const numberLeft = () => {
        if (number > 50) {
            return <h6>State: 50 / 50</h6>
        } else {
            return <h6>State: {number} / 50</h6>
        }
    }

    const nextButton = () => {
        setNumber(number + 1);
        setRight("");
        setInput("");
        setSide(0);
    }

    const prevButton = () => {
        setNumber(number - 1);
        setRight("");
        setInput("");
        setSide(0);
    }

    const check = () => {
        if(input.trim().toLowerCase() === answers[number - 1]) {
            setRight("Correct!");
            setCorrect(correct + 1);
        } else {
            setRight("Incorrect!");
        }
    }


  

  return (
    <div className="Quiz">
      <div className="header">
        {numberLeft()}
        <h6>{mode} mode</h6>
        <h6>{right}</h6>
      </div>
      {question()}
      <form>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      </form>
      <button onClick={check}>Check</button>
      <button onClick={prevButton}k>Prev</button>
      <button onClick={nextButton}>Next</button>
    </div>
  )
}

export default Quiz