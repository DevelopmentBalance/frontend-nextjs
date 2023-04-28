import styled from "styled-components";

import { Button as ButtonComponent } from "../Button";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: unset;
  min-height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white_1};
  width: 400px;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    width: 100%;
    height: unset;
    min-height: 100vh;
    border-radius: 0;
    padding: 40px 20px;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const Describe = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(ButtonComponent)`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const AlertCodeSended = styled.div`
  border-radius: 5px;
  width: calc(100% - 2px);
  height: fit-content;
  color: #37323e;
  font-weight: bolder;
`;

export const AlertContent = styled.p`
  background: rgba(236, 212, 68, 0.8);
  border: 2px solid rgb(236, 212, 68);
  padding: 10px;
  margin-top: 5px;

  color: #37323e;
  font-weight: normal;
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
