import React from "react";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { LoanApp } from "./components/LoanApp/LoanApp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Title
        title="Calculate and Compare Your Loans"
        titleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Qui dicta minus molestiae vel beatae natus eveniet ratione
            temporibus aperiam harum alias officiis assumenda officia quibusdam
            deleniti eos cupiditate dolore doloribus!"
      />
      <LoanApp />
    </div>
  );
}

export default App;
