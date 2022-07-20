import { useState } from "react";
import ControlBoard from "./components/ControlBoard";
import DisplayBoard from "./components/DisplayBoard";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  const [currentNumber, setNumber] = useState(0)
  return (
  <>
  <PageHeader/>
  <DisplayBoard num={currentNumber}/>
  <ControlBoard setState={setNumber} state={currentNumber}/>
  </>
)}

export default App;
