import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  color: white;
  height: 60px;
  padding: 1rem 0;
  position: sticky;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.header};

  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  display: flex;
  max-width: 1200px;
  padding: 0 1.5rem;
  height: 100%;
`;

export const LogoImg = styled.img`
  height: 25px;
  width: auto;
  object-fit: contain;

  @media (max-width: 480px) {
    height: 20px;
  }
`;
