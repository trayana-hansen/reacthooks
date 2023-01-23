import "./App.scss";
import Greeting from "./Components/Greeting/greeting";
import Counter from "./Components/Counter/counter";
import Form from "./Components/Form/form";
function App() {
  return (
    <div className="App">
      <Greeting />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
