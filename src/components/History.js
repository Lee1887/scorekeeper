import { useState } from "react";
import styled from "styled-components";
import Button from "./Button.js";

export default function History({ nameOfGame, players }) {
  // const [hidden, setHidden] = useState(true);
  return (
    <Wrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      {players.map(({ name, score, id }) => (
        <Player key={id}>
          <span>{name}</span>
          <span>{score}</span>
        </Player>
      ))}
      {/* //<div>
        //{!hidden ? <p>Hide</p> : null}
        /* <button onClick={() => setHidden((s) => !s)}></button> 
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 7px;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 9px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitle = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
`;
