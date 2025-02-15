import { useState } from "react";

export const Title = ({ text }) => {
  const [title, setTitle] = useState(text);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1 className="app-title">{title}</h1>
      <input type="text" value={title} onChange={changeTitle} />
    </div>
  );
};
