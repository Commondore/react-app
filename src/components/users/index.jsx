import { Person } from "./person";

export const Users = ({ users, increaseAge }) => {
  return (
    <main className="posts">
      {users.map((person) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            image={person.avatar}
            increase={() => increaseAge(person.id)}
          >
            <p>Хобби: {person.hobby}</p>
          </Person>
        );
      })}
    </main>
  );
};
