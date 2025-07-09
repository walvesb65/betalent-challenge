import { renderHook, waitFor } from "@testing-library/react";
import { useFetchUsers } from "./useFetchUsers";
import * as api from "../services/api";
import { vi } from "vitest";

const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    job: "Desenvolvedor",
    admission_date: "2023-06-01",
    phone: "11999999999",
    image:
      "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg",
  },
];

describe("useFetchUsers", () => {
  it("deve buscar e retornar os usuários corretamente", async () => {
    vi.spyOn(api, "getUsers").mockResolvedValue(mockUsers);

    const { result } = renderHook(() => useFetchUsers());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.users).toEqual(mockUsers);
    expect(result.current.error).toBeNull();
  });

  it("deve retornar erro se a requisição falhar", async () => {
    vi.spyOn(api, "getUsers").mockRejectedValue(new Error("Erro de rede"));

    const { result } = renderHook(() => useFetchUsers());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.users).toEqual([]);
    expect(result.current.error).toBe("Erro de rede");
  });
});
