import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./Header";
import Product from "./Product";
import Footer from "./Footer";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />

      <Product />

      <Footer />
    </>
  );
}
export default App;
