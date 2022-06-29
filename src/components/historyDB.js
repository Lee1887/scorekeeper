import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function HistoryDB({ gameName, players }) {
  return (
    <Wrapper>
      <GameTitle>{gameName}</GameTitle>
      {players.map(({ name, score, id }) => (
        <Player key={id}>
          <span>{name}</span>
          <span>{score}</span>
        </Player>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  gap: 8px;
  border: 1px solid blue;
  padding: 6px;
  border-radius: 5px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitle = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
`;
