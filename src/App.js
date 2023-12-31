import './App.css';
import { useEffect, useState } from "react";
import Viewer from './Viewer';
import Controller from './Controller';

function App() {
  const [count, setCount] = useState(0);
  const handleCount = (value) =>{
      setCount(count + value)
  } 
  useEffect(()=>{
    console.log("컴포넌트 업데이트");
    return ()=>{
      console.log("클린업");
    }
  },[])
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller handleCount={handleCount}/>
      </section>
    </div>
  );
}

export default App;
