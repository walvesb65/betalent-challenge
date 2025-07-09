import { HeaderContainer, HeaderWrapper, LogoImg } from "./Header.styles";
import Logo from "../../assets/Logo.png";
export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LogoImg src={Logo} alt="Logo BeTalent" />
      </HeaderWrapper>
    </HeaderContainer>
  );
};
