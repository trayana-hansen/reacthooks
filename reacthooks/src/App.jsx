import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/Router/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
