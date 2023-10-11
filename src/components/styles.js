
import styled from "@emotion/styled";


const Title = styled.h1`
  text-align: center;
`;
const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;
const TwoColumnLayout = styled.div`
  display: grid;~
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

export {
  Title,
  PageContainer,
  TwoColumnLayout,
  Input,}