import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Header } from "./Header";
import theme from "../../styles/theme";

describe("Header", () => {
  it("deve renderizar o logo com alt correto", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const logo = screen.getByAltText("Logo BeTalent");
    expect(logo).toBeInTheDocument();
  });
});
