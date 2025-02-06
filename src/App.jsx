import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Person } from "./components/users/person";
import { Title } from "./components/title";
import { Counter } from "./components/counter";
import { useState } from "react";
import { Users } from "./components/users";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Mike", age: 20, avatar: "/images/profile.png", hobby: "Шахматы" },
    { id: 2, name: "John", age: 30, avatar: "/images/profile.png", hobby: "Баскетбол" },
    { id: 3, name: "Sam", age: 10, avatar: "/images/profile.png", hobby: "Футбол" },
  ]);

  const changeName = () => {
    const copy = [...users];
    const person = { ...users[0] };
    person.name = "Peter Parker";
    copy[0] = person;
    setUsers(copy);
  };

  const increaseAge = (id) => {
    setUsers((users) => {
      return users.map((person) => {
        return {
          ...person,
          age: person.id === id ? person.age + 1 : person.age,
        };
      });
    });
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

        <Users users={users} increaseAge={increaseAge} />
      </div>
      <Footer />
    </>
  );
};

export default App;
