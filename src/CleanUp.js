import { useEffect, useState } from "react";

function Hello() {

  function byeFn() {
    console.log("bye! :(");
  }
  function hiFn() {
    console.log("hi! :)");
    return byeFn
  }

  useEffect(hiFn
    // console.log("created :)");
    // return () => console.log("destroyed :)");
    , [])
  return <h1>hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button value="button" onClick={onClick} >{showing ? "show" : "hide"}</button>
    </div>
  );
}

export default App;
