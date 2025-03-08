import React from "react";
import Header from "./components/header/Header";
import HexCanvas from "./components/hexcanvas/HexCanvas";
import About from "./components/about/About";
import Counter from "./components/counter/Counter";
import Process from "./components/process/Process";
import Client from "./components/clients/Client";
import WorkSample from "./components/work/WorkSample";


const App = () => {
  return (
    <>
      <div className="smooth-wrapper">
        <div className="smooth-content">
          <Header />
          <HexCanvas />
          <About />
          <Counter />
          <Client/>
          <Process/>
          <WorkSample/>
        </div>
      </div>
    </>
  );
};

export default App;
