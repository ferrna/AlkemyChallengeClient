import styled from "styled-components";

export const LoginStyled = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  height: 100%;
  display: flex;
  align-items: center;
  h2 {
    text-align: center;
  }
  .container {
    width: 300px;
    height: 300px;
    margin: auto;
    padding: 1rem 0.8rem;
    border: 1px solid grey;
    border-radius: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .container-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 450px) {
    .container-buttons {
      flex-direction: column;
    }
  }
`;

export const Button = styled.button`
  width: 110px;
  height: 40px;
  border: 2px solid grey;
  border-radius: 6px;
  margin: 0 auto;
  &:hover {
    border: 2px solid transparent;
    cursor: pointer;
    color: white;
  }
`;
