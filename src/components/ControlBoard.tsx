interface ControlBoardState {
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>> 
}
const ControlBoard = ({state, setState}:ControlBoardState): JSX.Element => {

   const handleNext = () => {
    setState((previousvalue: number) => previousvalue + 1)
   }

   const handleReset = () => {
    setState(() => 0)
   }

  return (
    <div className="control">
      <button onClick={handleNext}>next</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default ControlBoard;