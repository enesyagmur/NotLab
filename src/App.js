import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("./Pages/Login"));
const Notes = React.lazy(() => import("./Pages/Notes"));
const NewNote = React.lazy(() => import("./Pages/NewNote"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<p>Yükleniyor...</p>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/newnote" element={<NewNote />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
