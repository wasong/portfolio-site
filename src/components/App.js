import React from "react";
import TypingEffect from "../features/typeEffect";
import NavMenu from './NavMenu';
import ImageCarousel from "../features/imageCarousel";

function App() {
  return (
    <div className="App">
    <NavMenu />
    <h1 className="text-center mx-auto mt-32" >Hi,</h1>
<span className="flex justify-center">
  <TypingEffect text="   My name is Brice." className="text-center" delay={1000} />
</span>
    </div>
  );
}

export default App;