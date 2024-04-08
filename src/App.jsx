import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import BlogProduct from "./components/BlogProduct/BlogProduct";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BlogProduct />
    </>
  );
}

export default App;
