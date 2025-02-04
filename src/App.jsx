import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Person } from "./components/person";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
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
