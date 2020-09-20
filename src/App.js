import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal";

export default function App() {
  const [isModalShown, set] = useState(false);
  const toggleModal = () => {
    set((isShown) => !isShown);
  };

  return (
    <div className="App">
      <h1>React Custom Hooks</h1>
      <h2>Let's test this thing out</h2>
      <button className="button" onClick={toggleModal}>
        Click me
      </button>
      {isModalShown ? <Modal onClose={toggleModal} /> : null}
    </div>
  );
}
