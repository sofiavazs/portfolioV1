import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  color: ${(props) => props.theme.primaryColor};
  overflow: hidden;

  @media (max-width: 768px) {
    height: unset;
  }
`;
