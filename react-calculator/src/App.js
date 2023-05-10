import "./App.css";
import { useState, useEffect } from "react";

const [input, setInput] = useState();

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="" onClick={reset}>AC</div>
        <div className="" onClick={percent}>%</div>
        <div className="" onClick={minusPlus}>+/-</div>


      </div>
    </div>
  );
}

export default App;
