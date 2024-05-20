import { useState } from "react";
import Header from './components/Header';
import Results from './components/Results';
import UserInput from './components/UserInput';

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const handleChange = (event, field) => {
    setUserInput((prevInput) => {
      let newInput = { ...prevInput, [field]: +event.target.value };
      return newInput;
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput}/>
    </>
  );
}

export default App;
