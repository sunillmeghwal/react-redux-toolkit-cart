import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { clearAllItem } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <h1>React redux toolkit</h1>
      <button onClick={() => dispatch(clearAllItem())} className="remove-btn">
        Clear Cart
      </button>
      <Product />
    </>
  );
}
export default App;
