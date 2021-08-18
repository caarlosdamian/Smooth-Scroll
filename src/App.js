import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Main from "./sections/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Contact />
    </div>
  );
}

export default App;
