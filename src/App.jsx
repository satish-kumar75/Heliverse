import { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import initFluid from "./script";

const App = () => {
  useEffect(() => {
    initFluid();
  }, []);
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
