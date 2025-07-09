import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: ${({ theme }) => theme.fonts.main};

  thead {
    tr {
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }

    .relative-th {
      display: none;
    }
  }

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    background: white;
  }

  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: 500;
  }

  .mobile-row {
    display: none;
  }

  @media (max-width: 768px) {
    thead {
      tr {
        height: 47px;
        background-color: ${({ theme }) => theme.colors.primary};
        width: 100%;
      }

      .relative-th {
        display: table-cell;
        width: 100%;
        padding-right: 25px;

        .point {
          width: 10px;
          margin-left: auto;
          background-color: white;
          border-radius: 10px;
          height: 10px;
        }
      }
    }

    tr {
      display: block;
      background: white;
      overflow: hidden;
    }

    td {
      display: block;
      border: none;
      padding: 0;
    }

    .desktop-only,
    .desktop-only-row {
      display: none;
    }

    .mobile-row {
      display: flex;
      height: 60px;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      gap: 25px;
    }

    .mobile-row span {
      flex: 1;
      font-weight: 400;
      font-size: 1rem;
    }

    .dropdown-content {
      height: 1px;
      overflow: hidden;
      transition: height 0.3s ease, opacity 0.2s ease;
      padding: 0 16px;
      font-size: 0.95rem;
      pointer-events: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      div {
        display: flex;
        justify-content: space-between;
        margin: 6px 0;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};

        strong {
          font-weight: 600;
        }
      }
    }

    .dropdown-content.show {
      height: auto;
      opacity: 1;
      padding: 5px 15px 20px;
      pointer-events: auto;
    }
  }

  @media (min-width: 769px) {
    .mobile-row {
      display: none;
    }

    .dropdown-content {
      display: none;
    }

    .desktop-only-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      padding: 12px 16px;
      gap: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;
`;

export const EmptyStateImg = styled.img`
  width: 200px;

  @media (max-width: 769px) {
    width: 100px;
  }
`;

export const EmptyStateText = styled.span`
  font-family: ${({ theme }) => theme.fonts.main};
`;
