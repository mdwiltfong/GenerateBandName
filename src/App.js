
import { useState } from 'react';
import './App.css';
import axios from 'axios'

/* const adjectives = ["Lilac", "Scary", "Enormous", "Blind", "Hopeful", "Warped", "Vintage", "Great", "Terrible", "Dental", "Filthy", "Brainy", "Cosmic", 
                    "Discretionary", "Slushy", "Opaque", "Wet", "Conspiratorial", "Aluminum", "Brave", "Heartbroken", "Miserable", "Holy", "Plucky", "Sympathetic", "Brass"] 
const nouns = ["Octopi", "Happiness", "Shrubbery", "Bracelets", "Code", "Soap", "Cans", "Messages", "Lighter", "Bass", "Puppies", "Courts", "Pages", "Gasps", "Pendulum",
                "Film", "Bigfoot", "Sons", "Stopwatch", "Cartographer", "Plothole", "Error", "Bass", "Bottle", "Engine", "Landmine", "Sumbarine", "Drugs"]
function GenerateBandName() {

  function randomAjective() {
    return adjectives[(Math.floor(Math.random() * adjectives.length))]

}

function randomNoun() {
    return nouns[(Math.floor(Math.random() * nouns.length))]

}
    return `Hey, we should call the band The ${randomAjective() +  ' ' + randomNoun()}.`
}
 */

const App = () => {
  const [message, setMessage] = useState()
  const handleClick = (e) => {
    e.preventDefault()
    axios.get('http://localhost:8000/random')
    .then((resp)=>setMessage(resp.data.bandName));
    //setMessage(GenerateBandName())
  } 

  
console.log(message, 'message')
  
  return (
    <div className="App">
      <header className="App-header">
      <button className="App-button" type="button" id="button" onClick={handleClick} > What should we call the band?</button>
      <p className="App-message">
        {message}
      </p>
      </header>
    </div>
  );
}

export default App;