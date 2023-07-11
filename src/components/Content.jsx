import React, { useState } from "react";

function Content() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {};

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <button onClick={handleClick}>Update Text</button>
      <p>Entered Text: {text}</p>
    </div>
  );
}

export default Content;
