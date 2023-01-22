import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: white;
  
  .modal-calculate {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 4px 5px 5px 5px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    height: 60%;
    width: 50%;
    form {
      h1{
        font-size: 35px;
      }
      color: black;
      
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      gap: 3px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      .input-err{
        height: 6%;
        width: 40%;
        display: flex;
        flex-direction: column;
        
        .error-message{
          font-size: 13px;
          margin: 0;
          text-align: left;
          color: red;
        }
        
        

      }
      .error-message{
        color: black;
      }
      button{
        width: 60%;
        border: 0;
      }
    }
    aside{
      background-color: rgba(0, 0, 0, 0.03);
      color: black;
      h2{
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        ::after{
          content:"";
          background-color: rgba(0, 0, 0, 0.06);
          height: 3px;
          width: 60%;
          border-radius: 5px;
          
        }
      }
      .results{
        display: flex;
        flex-direction: column;
        height: 70%;
        width: 100%;
        justify-content: center;
        align-items: center;
          span{
            display: flex;
            width: 100%;
            align-items: center;
            font-size: 20px;
            color: blue;
            font-style: italic;
            justify-content: center;
            p{
              color: blue;
              text-align: left;
              font-weight: 700;
              font-size: 1.5rem;
              font-style: italic;
            }
          }
      }
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        
        height: 100%;
        width: 30%;
        
        border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;
