import styled from "styled-components";

import { Balance } from "../../components/modules";
import { GoBack as GoBackComponent, Table } from "../../components";

export const HomeContainer = styled(Balance)`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0 40px;
`;

export const GoBack = styled(GoBackComponent)`
  margin: 0px;
`;

export const TableContainer = styled(Table)``;

export const RowIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  margin: 50px 0px 30px 0px;
`;
