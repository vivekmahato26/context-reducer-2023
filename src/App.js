import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, increseBy } from "./redux/slice/counterSlice";
import { useEffect } from "react";
import { fetchProducts } from "./redux/slice/productSlice";
import ProductList from "./components/productList";

function App() {
  const counter = useSelector((state) => state.Counter);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increseBy(100))}>Increase By 100</button>
      {counter.value}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <ProductList/>
    </div>
  );
}

export default App;
