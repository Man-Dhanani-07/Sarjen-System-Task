import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Validation from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Dashboard from "./Authentication/Dashboard";
import ForgotPW from "./Authentication/ForgotPW";
import ChangePW from "./Authentication/ChangePW";
import Form from "./Show Information/Form";
import TodoForm from "./Todo Application/TodoForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Validation />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ForgotPassword" element={<ForgotPW />} />
          <Route path="/Change-Password" element={<ChangePW />} />
          <Route path="/form" element={<Form />} />
          <Route path="/Todo" element={<TodoForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
