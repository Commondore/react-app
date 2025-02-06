import "./person.css";

export const Person = ({ name, age, children, image, increase }) => {
  return (
    <article className="post-item">
      <img width={200} src={image} alt="" onClick={increase} />
      <h3 className="post-title">Имя: {name}</h3>
      <p className="user-age">Возраст: {age} лет</p>
      <p>Случайное число: {Math.floor(Math.random() * 10)}</p>
      {children}
    </article>
  );
};
