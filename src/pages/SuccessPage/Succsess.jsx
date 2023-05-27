import styled from "styled-components"

export default function Success() {
  return (
    <>
      <TextContainer>
        <strong><p>Filme e sessão</p></strong>
        <p>Tudo em todo lugar ao mesmo tempo</p>
        <p>03/03/2023 - 14:00</p>
      </TextContainer>

      <TextContainer>
        <strong><p>Ingressos</p></strong>
        <p>Assento 01</p>
        <p>Assento 02</p>
        <p>Assento 03</p>
      </TextContainer>

      <TextContainer>
        <strong><p>Comprador</p></strong>
        <p>Nome: Letícia Chijo</p>
        <p>CPF: 123.456.789-10</p>
      </TextContainer>
      <Margin />
    </>)
}
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`
const Margin = styled.div`
  margin-bottom: 50px;
`