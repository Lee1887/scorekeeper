import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => (props.isActive ? "#00FFFFF" : "lightgray")};
  ${(props) => props.isActive && "color: white"}
  border: 4px solid limegreen;
  width: 100%;
`;
