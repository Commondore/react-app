import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Person } from "./components/person";
import { Title } from "./components/title";
import { Counter } from "./components/counter";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="text-center">
          <Title text="Приложение на React" />
          <Counter />
        </div>
        <main className="posts">
          <Person name="Mike" age={20} image="/images/profile.png">
            <p>Хобби: Шахматы</p>
          </Person>
          <Person name="John" age={30} image="/images/profile2.webp">
            <p>Хобби: Баскетбол</p>
          </Person>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
