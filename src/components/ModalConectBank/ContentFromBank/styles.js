import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  .back-btn,
  .box-white-footer,
  .col-xs-6,
  .box-white-content div div h1 {
    display: none;
  }

  .container {
    width: 100%;
  }

  .box-white {
    padding: 0;
  }

  .btn-login {
    margin-top: 20px;
  }

  div {
    div {
      box-shadow: none;
      margin: 0;
    }
  }
`;
