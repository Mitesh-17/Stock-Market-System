import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Login from "./MainPage/Login";
import Registration from "./MainPage/Registration";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stock-app" element={<MainPage />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/signIn" element = {<Registration />} />
        <Route path="/stock-app/dashboard" element = {<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
