import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./Pages/Home/Home";

const LoginRegister = React.lazy(() => import("./Pages/Login/LoginRegister"));
const Notes = React.lazy(() => import("./Pages/MyNote/MyNotes"));
const NewNote = React.lazy(() => import("./Pages/NewNote/NewNote"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>Yükleniyor...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/newnote" element={<NewNote />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
