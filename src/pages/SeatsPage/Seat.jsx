import { useState } from "react";
import styled from "styled-components";

export default function Seat(props) {
  const [verde, setVerde] = useState(false);

  const { id, name, setIdReservados, idReservados, nReservados, setNReservados } = props;

  return (
    <>
      {props.isAvailable === false && (
        <SeatItemYellow onClick={() => alert("Esse assento não está disponível")}>
          {name}
        </SeatItemYellow>
      )}
      {props.isAvailable === true && (verde == true ?
        <SeatItemGreen onClick={() => {
          setVerde(false);
          setIdReservados(idReservados.filter(a => a !== id));
          setNReservados(nReservados.filter(b => b !== name));
        }}>
          {name}
        </SeatItemGreen> :
        <SeatItemGrey onClick={() => {
          setVerde(true);
          setIdReservados([...idReservados, id]);
          setNReservados([...nReservados, name]);
        }}>
          {name}
        </SeatItemGrey>
      )}
    </>)
}
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
  cursor: pointer;
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
  cursor: default;
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
  cursor: pointer;
`
