import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState();
  const [timer, setTimer] = useState();
  const [start, setStart] = useState(true);
  const onClickBtn = (number) => {
    const interval = setInterval(() => {
      setTimer(number--);

      if (number < 0) {
        clearInterval(interval);
        console.log("Ding!");
        setStart(true);
      }
    }, 1000);
    setStart(false);
  };

  return (
    <>
      <h1>Timer</h1>
      <input type="number" onChange={(e) => setNumber(e.target.value)} />
      {start ? (
        <button
          onClick={() => {
            onClickBtn(number);
          }}
        >
          Start
        </button>
      ) : (
        <>
          <button>stop</button>
          <button>resume</button>
        </>
      )}
      <div>{timer}</div>
    </>
  );
}

export default App;
