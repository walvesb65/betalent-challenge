import React, { useState } from "react";
import { type User } from "../../services/api";
import {
  StyledTable,
  Avatar,
  ToggleButton,
  EmptyStateContainer,
  EmptyStateImg,
  EmptyStateText,
} from "./Table.styles";
import { formatDate, formatPhone } from "../../utils/formatters";
import { ChevronDown, ChevronUp } from "react-feather";
import Lupa from "../../assets/Lupa.svg";

interface TableProps {
  users: User[];
}

export const Table = ({ users }: TableProps) => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((k) => [k, false])),
      [id]: !prev[id],
    }));
  };

  if (!users || users.length === 0) {
    return (
      <EmptyStateContainer>
        <EmptyStateImg src={Lupa}></EmptyStateImg>
        <EmptyStateText>Nenhum usuário encontrado</EmptyStateText>
      </EmptyStateContainer>
    );
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>FOTO</th>
          <th>NOME</th>
          <th className="desktop-only">CARGO</th>
          <th className="desktop-only">DATA DE ADMISSÂO</th>
          <th className="desktop-only">TELEFONE</th>
          <th className="relative-th">
            <div className="point"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <React.Fragment key={user.id}>
            <tr>
              <td>
                <div className="mobile-row">
                  <Avatar
                    src={user.image || "/default-avatar.png"}
                    alt={user.name || "Sem nome"}
                  />
                  <span>{user.name || "--"}</span>
                  <ToggleButton
                    data-testid={`toggle-${user.id}`}
                    onClick={() => toggleRow(user.id)}
                  >
                    {expandedRows[user.id] ? <ChevronUp /> : <ChevronDown />}
                  </ToggleButton>
                </div>
                <div className="desktop-only">
                  <Avatar
                    src={user.image || "/default-avatar.png"}
                    alt={user.name || "Sem nome"}
                  />
                </div>
              </td>
              <td className="desktop-only">{user.name || "--"}</td>
              <td className="desktop-only">{user.job || "--"}</td>
              <td className="desktop-only">
                {formatDate(user.admission_date)}
              </td>
              <td className="desktop-only">{formatPhone(user.phone)}</td>
            </tr>

            <tr className="mobile-only">
              <div
                className={`dropdown-content ${
                  expandedRows[user.id] ? "show" : ""
                }`}
              >
                <div>
                  <strong>Cargo:</strong> {user.job || "--"}
                </div>
                <div>
                  <strong>Data de admissão:</strong>{" "}
                  {formatDate(user.admission_date)}
                </div>
                <div>
                  <strong>Telefone:</strong> {formatPhone(user.phone)}
                </div>
              </div>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </StyledTable>
  );
};
