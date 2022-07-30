import styled from "styled-components";

export const RowTransactionStyled = styled.tr`
  td {
    height: 2.65rem;
    text-align: center;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
  }
  .descriptionTd {
    position: relative;
    .textdiv {
      width: 100%;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      overflow-y: scroll;
    }
    .textdiv::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .textdiv {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
    button {
      margin: 0 0 0 0.8rem;
      &:hover {
        cursor: pointer;
      }
    }
    .optionsdiv {
      z-index: 99;
      position: absolute;
      top: 2.3rem;
      right: 0.5rem;
      background-color: #ededed;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      padding: 4px 0 0 4px;
      button {
        width: 1.6rem;
        height: 1.6rem;
        margin: 0 4px 4px 4px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .descriptionTd .optionsdiv {
      position: absolute;
      top: 2.7rem;
      right: 0;
      z-index: 99;
      width: 84px;
      height: 64px;
    }
  }
  @media screen and (max-width: 550px) {
    .textdiv {
      font-size: 12px;
    }
    td:nth-child(3) {
      &::placeholder {
        content: "$  monto";
      }
    }
  }
`;
