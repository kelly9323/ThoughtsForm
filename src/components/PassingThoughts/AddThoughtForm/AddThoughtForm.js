import React, { useEffect, useState } from "react";
import { generateId, getNewExpirationTime } from "../utilities";
import '../styles.css'
export default function AddThoughtForm(props) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    if (text.length > 0) {
      props.addThought(thought);
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        placeholder="What's on your mind"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
