import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from './Routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export const colors = [
  {color: "red"},
  {color: "blue"},
  {color: "white"}
]

App.defaultProps = { colors };

export default App;
