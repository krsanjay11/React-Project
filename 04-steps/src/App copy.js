import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //   const step = 1;
  const [step, setStep] = useState(1); // default value of the state variable(1) var, stateVar
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Sanjay" });
  //   const arr = useState(1);
  //   console.log(arr); // Array(2), 0:1, 1:ƒ (), length: 2, [[Prototype]]: Array(0)
  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
      // setStep(step + 1); // this function will only 1 step not 2, we should not update state based on current state, instead of value, pass a callback function which will recieved as an argument the current value of the state ie in handlePrevious
    }
    // if (step < messages.length) setStep(step + 1);
    // bad practice of mutating object, specially in a framework like react which is all about immutability and functional state updates
    // test.name = "sahil"; // trigger a new re-render of the view
    // setTest({ name: "jyoti" });
  }
  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button
        className="close"
        style={{ color: `${isOpen ? "green" : "red"}` }}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
