import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: red;
  .modal-calculate {
    background-color: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    height: 60%;
    width: 60%;
    form {
        background-color: yellow;
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 5px;
      input {
        height: 5%;
      }
    }
    aside{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        background-color: yellow;
        height: 100%;
        width: 30%;
        background-color: orange;
    }
  }
`;
