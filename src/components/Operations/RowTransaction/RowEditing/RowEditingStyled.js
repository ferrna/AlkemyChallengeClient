import styled from "styled-components";

export const RowEditingStyled = styled.tr`
  td {
    height: 2.65rem;
    text-align: center;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    input {
      max-width: 50%;
    }
  }
  .descriptionTd {
    position: relative;
    button {
      margin: 0 0 0 0.8rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
