import styled from "styled-components"
import axios from "axios"; 4
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Seat from "./Seat";

export default function SeatsPage(props) {

  const parametros = useParams();

  const [assento, setAssento] = useState(undefined);

  const [disponivel, setDisponivel] = useState([]);

  const [idReservados, setIdReservados] = useState([]);

  const [nReservados, setNReservados] = useState([]);

  const [nome, setNome] = useState('');

  const [cpf, setCpf] = useState('');

  const navigate = useNavigate();



  useEffect(() => {

    const URLSessions = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${parametros.idSessao}/seats`

    const promise = axios.get(URLSessions);

    promise.then((resposta) => {
      setAssento(resposta.data);
      setDisponivel(resposta.data.seats);
    });

    promise.catch((erro) => {
      console.log(erro.response.data);
    });

  }, [])

  if (assento === undefined) {
    return (<div>Carregando...</div>)
  }

  //? console.log('Nome do Filme: ', assento.movie.title);
  //? console.log('Dia do Filme: ', assento.day.weekday);
  //? console.log('Hora do Filme: ', assento.name);
  //! console.log('Parametros: ', parametros)
  //? console.log('Nº do assento', nReservados);
  //! console.log('ID do assento', idReservados);
  //? console.log('NOME: ', nome);
  //? console.log('CPF: ', cpf);

  const { setNomeFilme, setDia, setHora, setNumeroAssento, setNomeUser, setCpfUser } = props;

  setNomeFilme(assento.movie.title);
  setDia(assento.day.weekday);
  setHora(assento.name);
  setNumeroAssento(nReservados);
  setNomeUser(nome);
  setCpfUser(cpf);

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {disponivel.map(dadosDisponivel =>
          <Seat
            nReservados={nReservados}
            setNReservados={setNReservados}
            idReservados={idReservados}
            setIdReservados={setIdReservados}
            {...dadosDisponivel}
          />)}
      </SeatsContainer>

      <CaptionContainer>
        <CaptionItem>
          <SeatItemGreen />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <SeatItemGrey />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <SeatItemYellow />
          Indisponível
        </CaptionItem>
      </CaptionContainer>

      <FormContainer onSubmit={(event) => {
        event.preventDefault();

        let post = {
          ids: idReservados,
          name: nome,
          cpf: cpf,
        }

        const URLPost = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

        const promise = axios.post(URLPost, post);

        promise.then((() => navigate("/sucesso")));

        promise.catch(erro => {
          console.log(erro.response.data);
        });


      }}>
        <label htmlFor="nome"> Nome do Comprador:</label>
        <input required data-test="client-name" type="text" id="nome" placeholder="Digite seu nome..." onChange={(event) => { setNome(event.target.value) }} />

        <label htmlFor="cpf"> CPF do Comprador:</label>
        <input required data-test="client-cpf" type="number" id="cpf" placeholder="Digite seu CPF..." onChange={(event) => { setCpf(event.target.value) }} />

        <button data-test="book-seat-btn">Reservar Assento(s)</button>
      </FormContainer>

      <FooterContainer data-test="footer">
        <div>
          <img src={assento.movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{assento.movie.title}</p>
          <p>{assento.day.weekday} - {assento.name}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  )
}

const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
`
const FormContainer = styled.form`
  width: calc(100vw - 40px); 
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`
const CaptionCircle = styled.div`
  border: 1px solid blue;
  background-color: lightblue;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
`
const SeatItemGrey = styled.div`
  border: 1px solid #7B8B99;
  background-color: #C3CFD9;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto';
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`
const SeatItemYellow = styled.div`
  border: 1px solid #F7C52B;
  background-color: #FBE192;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto';
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`
const SeatItemGreen = styled.div`
  border: 1px solid #0E7D71;
  background-color: #1AAE9E;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: 'Roboto';
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #C3CFD9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;

  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
          margin-top: 10px;
      }
    }
  }
`