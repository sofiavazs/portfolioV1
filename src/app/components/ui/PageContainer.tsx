import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  color: ${(props) => props.theme.primaryColor};

  @media (max-width: 767px) {
    padding: 5rem 1.5rem;
    height: unset;
  }
`;
