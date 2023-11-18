import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import NewNote from "./Pages/NewNote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/newnote" element={<NewNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
