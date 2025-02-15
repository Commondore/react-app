import { Header } from "./components/header";
import { Title } from "./components/title";
import { useState } from "react";
import { Users } from "./components/users";
import { Toggler } from "./components/toggler";
import { CounterTitle } from "./components/counter-title";

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Mike", age: 20, avatar: "/images/profile.png", hobby: "Шахматы" },
    { id: 2, name: "John", age: 30, avatar: "/images/profile.png", hobby: "Баскетбол" },
    { id: 3, name: "Sam", age: 10, avatar: "/images/profile.png", hobby: "Футбол" },
  ]);

  const [show, setShow] = useState(true);

  const changeName = (value, id) => {
    const copy = [...users];
    const index = copy.findIndex((person) => person.id === id);
    const person = { ...users[index] };
    person.name = value;
    copy[index] = person;
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

  const removePerson = (id) => {
    setUsers((users) => {
      return users.filter((person) => person.id !== id);
    });
  };

  const togglePeople = () => {
    setShow((show) => {
      return !show;
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="text-center">
          <Title text="Приложение на React" />

          <Toggler show={show} toggle={togglePeople}>
            Переключатель людей
          </Toggler>

          <CounterTitle units={users}>Кол-во людей</CounterTitle>
        </div>
        {show && (
          <Users
            users={users}
            increaseAge={increaseAge}
            changeName={changeName}
            removePerson={removePerson}
          />
        )}
      </div>
    </>
  );
};

export default App;
