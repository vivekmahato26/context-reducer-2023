import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increseBy } from "./redux/slice/counterSlice";

function App() {
  const counter = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increseBy(100))}>Increase By 100</button>
      {counter.value}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
