import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0)
  const inc5 = () => {
    for (let i = 1; i <= 5; i++) {
      setCounter(prevstate => prevstate + 1)
    }
  }
  return (
    <>

      <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">
        <button onClick={inc5}>counter:{counter} </button>
      </div>

    </>
  );
};

export default App;

