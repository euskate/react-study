import Button from "./Button";
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Effect() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time");

  useEffect(() => {
    console.log("Call the API...");
  }, [])

  useEffect(() => {
    if (keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword])

  useEffect(() => {
    console.log("i run when counter changes.")
  }, [counter])

  useEffect(() => {
    console.log("i run when counter & keyword changes.")
  }, [keyword, counter])
  return (
    <div>
      <input type="text" placeholder="search here" value={keyword} onChange={(event) => { setKeyword(event.target.value) }} />
      <h1 className={styles.title}>{counter}</h1>
      <button value="button" onClick={onClick} >click me</button>
    </div>
  );
}

export default Effect;
