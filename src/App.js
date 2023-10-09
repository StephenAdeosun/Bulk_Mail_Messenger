import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullPage from "./fullPage";
import Login from "./Pages/login";
import SignUp from "./Pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="Pages/login" element={<Login />} />
        <Route path="Pages/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
