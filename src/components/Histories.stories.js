import styled from "styled-components";
import HistoryDB from "./historyDB";

export default function HistoriesStories({ history }) {
  return (
    <HistoryWrapper>
      <h2>Previous Competitions </h2>
      {history.map(({ gameName, players, id }) => (
        <HistoryDB key={id} gameName={gameName} players={players} />
      ))}
    </HistoryWrapper>
  );
}
const HistoryWrapper = styled.div`
  display: grid;
  gap: 28px;
`;
