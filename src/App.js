import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
    let result = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsleft = grams - (burning * time)
    if (gender === "male") {
      result = gramsleft / (weight * 0.7)
    } if (gender === "female") {
      result = gramsleft / (weight * 0.6)
    }
    setResult(result)
  }

  return (
    <div>
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
          <input value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles</label>
          <select value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select value={time} onChange={e => setTime(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type ="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked/><label>Male</label>
          <input type ="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
        </div>
        <div>
          <label></label>
          <output> {result.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
