import styled, { css } from "styled-components";

const alignTextDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OperationsStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(17, 60px);
  grid-auto-rows: 60px;
  .balance {
    grid-area: 1 / 6 / 3 / 8;
    ${alignTextDiv};
    span {
      font-size: 1.5rem;
      font-weight: 600;
      color: #b1eeb1;
    }
  }
  .form {
    grid-area: 3 / 3 / 7 / 11;
    padding: 1rem;
    border: 1px solid #d9d9d9;
    display: flex;
    justify-content: flex-start;
  }
  .title-abm {
    grid-area: 7 / 5 / 8 / 9;
    ${alignTextDiv};
    span {
      font-size: 1.3rem;
      padding-top: 1rem;
    }
  }
  .transactions {
    grid-row-start: 8;
    grid-column: 3 / 11;
    min-height: 540px;
    border-radius: 4px;
    position: relative;
    overflow-y: scroll;
    table {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
      width: 100%;
      border-collapse: collapse;
      thead {
        position: sticky;
        top: 1px;
      }
      tbody {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
      }
      th {
        font-weight: 600;
        height: 2.5rem;
      }
      td,
      th {
        text-align: center;
        border-top: 1px solid #d9d9d9;
        border-right: 1px solid #d9d9d9;
      }
    }
  }
  .no-transactions {
    border: none;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    bottom: 0;
    ${alignTextDiv};
    color: #555;
  }
  .empty-cells td {
    height: 2.65rem;
    color: #f9f9f9;
  }
  .table-head-row {
    background-image: linear-gradient(to right, #8c65f6 0 20%, #019cad);
    color: #e2e2e2;
  }
  @media screen and (max-width: 992px) {
    .form {
      grid-area: 3 / 2 / 8 / 12;
      flex-direction: column;
    }
    .title-abm {
      grid-area: 8 / 5 / 9 / 9;
      span {
        font-size: 1.1rem;
      }
    }
    .transactions {
      grid-row-start: 9;
      grid-column: 2 / 12;
      height: 540px;
      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 0px repeat(10, 1fr) 0px;
  }
  @media screen and (max-width: 550px) {
    .transactions {
      table {
        th,
        tbody,
        td {
          font-size: 12px;
        }
      }
    }
  }
  @media screen and (max-width: 450px) {
    .balance {
      grid-area: 1 / 5 / 3 / 9;
    }
    .form span {
      font-size: 14px;
    }
    .form .dateDiv input {
      width: 150px;
    }
    .title-abm {
      grid-area: 8 / 4 / 9 / 10;
    }
  }
`;
