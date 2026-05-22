import "./index.css";

import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./Routes";

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <>
     <AppRoutes />
    </>
  )
}

export default App;