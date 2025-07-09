import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import theme from "./styles/theme";

const Wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement) => {
  return render(ui, { wrapper: Wrapper });
};

export { customRender as render };
