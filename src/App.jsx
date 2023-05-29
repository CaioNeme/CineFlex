import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import axios from "axios"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

axios.defaults.headers.common['Authorization'] = '5nQ6DjwFkV8ZTXHmGxYKeIW7';

export default function App() {




  const [nomeFilme, setNomeFilme] = useState('');
  const [dia, setDia] = useState('');
  const [hora, setHora] = useState('');
  const [numeroAssento, setNumeroAssento] = useState([]);
  const [nomeUser, setNomeUser] = useState('');
  const [cpfUser, setCpfUser] = useState('');

  return (
    <>
      <BrowserRouter>
        <NavContainer>CINEFLEX</NavContainer>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
          <Route path="/assentos/:idSessao" element={<SeatsPage
            setNomeFilme={setNomeFilme}
            setDia={setDia}
            setHora={setHora}
            setNumeroAssento={setNumeroAssento}
            setNomeUser={setNomeUser}
            setCpfUser={setCpfUser}
          />} />
          <Route path="/sucesso" element={<SuccessPage
            nomeFilme={nomeFilme}
            dia={dia}
            hora={hora}
            numeroAssento={numeroAssento}
            nomeUser={nomeUser}
            cpfUser={cpfUser}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
