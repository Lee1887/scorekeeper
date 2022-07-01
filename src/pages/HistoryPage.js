import styled from "styled-components";
import History from "../components/History";

export default function HistoryPage({ history }) {
  return (
    <HistoryWrapper>
      <h2>Last Games by Luca "The Earl" of Coding</h2>
      {history.map(({ nameOfGame, players, id }) => (
        <History key={id} nameOfGame={nameOfGame} players={players} />
      ))}
    </HistoryWrapper>
  );
}

const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`;
