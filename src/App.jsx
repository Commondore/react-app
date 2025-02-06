import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Person } from "./components/person";
import { Title } from "./components/title";
import { Counter } from "./components/counter";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Mike", age: 20, avatar: "/images/profile.png", hobby: "Шахматы" },
    { id: 2, name: "John", age: 30, avatar: "/images/profile.png", hobby: "Баскетбол" },
  ]);

  const changeName = () => {
    const copy = [...users];
    const person = { ...users[0] };
    person.name = "Peter Parker";
    copy[0] = person;
    setUsers(copy);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="text-center">
          <Title text="Приложение на React" />
          <Counter />
          <button onClick={changeName}>Изменить имя 1го пользователя</button>
        </div>
        <main className="posts">
          <Person name={users[0].name} age={users[0].age} image={users[0].avatar}>
            <p>Хобби: {users[0].hobby}</p>
          </Person>
          <Person name={users[1].name} age={users[1].age} image={users[1].avatar}>
            <p>Хобби: {users[1].hobby}</p>
          </Person>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
