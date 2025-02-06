import { useState } from "react";

export const Title = ({ text }) => {
  const [title, setTitle] = useState(text);
  const changeTitle = () => {
    setTitle("Новый заголовок");
  };
  return (
    <h1 className="app-title" onClick={changeTitle}>
      {title}
    </h1>
  );
};
