import { useState } from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { Table } from "../components/Table/Table";
import {
  HomeContainer,
  MainContent,
  InputContainer,
  LabelText,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  LoadingContainer,
} from "./Home.styles";

export const Home = () => {
  const { users, loading, error } = useFetchUsers();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <LoadingContainer>Carregando...</LoadingContainer>;
  if (error)
    return (
      <div>
        <LoadingContainer>{error}</LoadingContainer>
      </div>
    );

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)
  );

  return (
    <HomeContainer>
      <InputContainer>
        <LabelText>Funcionários</LabelText>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon />
        </SearchInputWrapper>
      </InputContainer>
      <MainContent>
        <Table users={filteredUsers} />
      </MainContent>
    </HomeContainer>
  );
};
