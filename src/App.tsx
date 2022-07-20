import { useState } from "react";
import ControlBoard from "./components/ControlBoard";
import DisplayBoard from "./components/DisplayBoard";
import PageHeader from "./components/PageHeader";

function App(): JSX.Element {
  const [currentNumbers, setNumber] = useState<number[]>([0]);
  console.log(currentNumbers);
  return (
    <>
      <PageHeader />
      <DisplayBoard num={currentNumbers[currentNumbers.length - 1]} />
      <ControlBoard setState={setNumber} state={currentNumbers} />
    </>
  );
}

export default App;
