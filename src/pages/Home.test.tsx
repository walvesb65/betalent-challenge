import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Home } from "./Home";
import theme from "../styles/theme";
import { vi } from "vitest";

vi.mock("../hooks/useFetchUsers", () => ({
  useFetchUsers: vi.fn(),
}));

import { useFetchUsers } from "../hooks/useFetchUsers";

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);

const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    job: "Desenvolvedor",
    phone: "11999999999",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    job: "Designer",
    phone: "11988888888",
  },
];

describe("Home", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("exibe loading inicialmente", () => {
    (useFetchUsers as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      users: [],
      loading: true,
      error: null,
    });

    renderWithTheme(<Home />);

    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });

  it("exibe mensagem de erro", () => {
    (useFetchUsers as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      users: [],
      loading: false,
      error: "Falha ao carregar",
    });

    renderWithTheme(<Home />);

    expect(screen.getByText("Falha ao carregar")).toBeInTheDocument();
  });

  it("exibe lista de usuários e filtra pela busca", () => {
    (useFetchUsers as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      users: mockUsers,
      loading: false,
      error: null,
    });

    renderWithTheme(<Home />);

    expect(screen.getAllByText("João Silva").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Maria Oliveira").length).toBeGreaterThan(0);

    fireEvent.change(screen.getByPlaceholderText("Pesquisar"), {
      target: { value: "Maria" },
    });

    expect(screen.queryByText("João Silva")).not.toBeInTheDocument();

    expect(screen.getAllByText("Maria Oliveira").length).toBeGreaterThan(0);
  });
});
