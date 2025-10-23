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

      <Product />
    </>
  );
}
export default App;
