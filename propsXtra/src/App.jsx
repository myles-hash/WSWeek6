import { useState, useEffect} from "react";
import ButtonClick from "./ButtonClick";
import ButtonZero from "./ButtonZero"
import ButtonMinus from "./ButtonMinus";
import CountComp from "./CountComp";

export default function App(){
  useEffect(() => {handleReset, console.log("Page Reset!");},[]);
const [count, setCount] = useState(0);

function handleCount(){
  setCount(count + 1);
}

function handleReset(){
  setCount(0);
}

function handleMinus(){
  setCount(count - 1);
}

  return (
    <div>
      <h1>State as props baby!</h1>
      <p>This time, were putting the but in the component, passing state var and event handler as "props"</p>
      <CountComp handleReset={handleReset} count={count} />
      <ButtonClick handleCount={handleCount}/>
      <ButtonMinus handleMinus={handleMinus} />
      <ButtonZero handleReset={handleReset} />
    </div>
  );
}