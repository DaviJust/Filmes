import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./routes/Home.jsx";
import Filmes from "./routes/Filmes.jsx";
import Sobre from "./routes/Sobre.jsx";
import Footer from "./components/Footer.jsx";
import PostFilme from "./routes/PostFilme.jsx";
import Login from "./routes/Login.jsx";
import Contato from './routes/Contato.jsx';

function App() {

  return (
    <div>
      <Header />
      <Login/>
      <Footer />
    </div>
  );
}

<Login/>
export default App;
