import Button from "./Button.js";
import React, { useState } from "react";

const DisableButton = () => {
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    console.log("Its now Hide/shown");
    setDisabled(true);
  };

  return (
    <button type="button" onClick={handleSubmit} disabled={isDisabled}>
      Hide Game
    </button>
  );
};

export default DisableButton;
