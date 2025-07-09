import styled from "styled-components";
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  z-index: 999;
`;

export const InputContainer = styled.div`
  display: flex;
  position: sticky;
  top: 92px;
  z-index: 999;
  flex-wrap: wrap;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    top: 72px;
    padding: 1rem 0;
    height: 90px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 300px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  background-color: white;
  box-sizing: border-box;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(98, 0, 238, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary || "#999"};
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url("src/assets/icons/Lupa.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  pointer-events: none;
  @media (max-width: 768px) {
    top: 45%;
  }
`;

export const LabelText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MainContent = styled.main`
  width: 100%;
  overflow-x: auto;
  border-radius: 10px 10px 0 0;
`;

export const LoadingContainer = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.main};
`;
