import "./UserInput.css";

function UserInput({onChange, userInput}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={(e) => onChange(e, "initialInvestment")}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={(e) => onChange(e, "annualInvestment")}
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
            onChange={(e) => onChange(e, "expectedReturn")}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => onChange(e, "duration")}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
