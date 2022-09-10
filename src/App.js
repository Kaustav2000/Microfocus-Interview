import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import NotFound from "./Components/NotFound";
import SecondPage from "./Components/SecondPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" exact element={<Main />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
