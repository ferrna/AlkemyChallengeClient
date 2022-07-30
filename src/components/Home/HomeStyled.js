import styled, { css } from "styled-components";

const alignTextDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HomeStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 60px);
  grid-auto-rows: 60px;
  .balance {
    grid-area: 1 / 6 / 3 / 8;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
      padding-top: 1rem;
      font-size: 1.8rem;
      font-weight: 600;
      color: #b1eeb1;
    }
  }
  .title-home {
    grid-area: 3 / 4 / 4 / 10;
    ${alignTextDiv};
    span {
      font-size: 1.2rem;
      padding-top: 1rem;
      letter-spacing: 0.02rem;
      color: #0009;
    }
  }
  .transactions {
    grid-area: 4 / 3 / 12 / 11;
    border-radius: 4px;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    table {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
        "Open Sans", "Helvetica Neue", sans-serif;
      width: 100%;
      border-collapse: collapse;
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
    top: 2.5rem;
    left: 0;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
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
    .balance {
      span {
        font-size: 1.7rem;
      }
    }
    .transactions {
      grid-area: 4 / 2 / 12 / 12;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 0px repeat(10, 1fr) 0px;
    .title-home span {
      font-size: 16px;
    }
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
    .title-home {
      grid-area: 3 / 3 / 4 / 11;
      span {
        font-size: 14px;
        padding-top: 1rem;
      }
    }
  }
`;
