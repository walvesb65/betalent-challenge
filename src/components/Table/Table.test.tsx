import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Table } from "./Table";
import theme from "../../styles/theme";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    job: "Desenvolvedor",
    admission_date: "2023-06-01",
    phone: "11999999999",
    image: "https://via.placeholder.com/40",
  },
];

describe("Table", () => {
  it("deve mostrar o estado vazio quando não houver usuários", () => {
    renderWithTheme(<Table users={[]} />);

    expect(screen.getByText("Nenhum usuário encontrado")).toBeInTheDocument();
  });

  it("deve renderizar dados do usuário corretamente", () => {
    renderWithTheme(<Table users={mockUsers} />);

    expect(screen.getAllByText("João Silva").length).toBeGreaterThan(0);
  });

  it("deve expandir detalhes ao clicar no botão de toggle", () => {
    renderWithTheme(<Table users={mockUsers} />);

    const toggleButton = screen.getByTestId("toggle-1");
    fireEvent.click(toggleButton);

    expect(screen.getByText(/Cargo:/)).toBeInTheDocument();
    expect(screen.getByText(/Telefone:/)).toBeInTheDocument();
  });
});
