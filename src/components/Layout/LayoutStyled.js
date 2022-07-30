import styled from "styled-components";

export const LayoutStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  font-family: monospace;
  background-color: #f9f9f9;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header header"
    "main main"
    "footer footer";
  header {
    grid-area: header;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 1px 6px 1px #0001;
    background-color: #fff;
  }
  main {
    grid-area: main;
    margin: 0 0.75rem;
    /* background-color: #c1f9d4; */
  }
  footer {
    grid-area: footer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e3e3e3;
    span a {
      text-decoration: none;
      &:visited {
        color: black;
      }
    }
  }
`;
