import React from "react";
import Header from "./header/Header";

const App = ({children}) =>
  <div>
    <Header/>
    {children}
  </div>

export default App;
