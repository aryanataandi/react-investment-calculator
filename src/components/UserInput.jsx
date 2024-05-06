import { useState } from "react";
import "./UserInput.css";

const INITIAL_INPUT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function UserInput() {
  const [userInput, setUserInput] = useState(INITIAL_INPUT);

  const handleChange = (event, field) => {
    setUserInput((prevInput) => {
      let newInput = { ...prevInput, [field]: event.target.value };
      return newInput;
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={(e) => handleChange(e, "initialInvestment")}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={(e) => handleChange(e, "annualInvestment")}
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            onChange={(e) => handleChange(e, "expectedReturn")}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => handleChange(e, "duration")}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
