import styled, { css } from "styled-components";

import {
  Card,
  GoBack as GoBackComponent,
  FlexTable,
  BalanceCard as BalanceCardComponent,
  Balance,
} from "@/components";

export const HomeContainer = styled(Balance)`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 0 40px;

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    padding: 10px 10px 0 10px;
  }
`;

export const GoBack = styled(GoBackComponent)`
  margin: 0px;
`;

export const TableTransactions = styled(FlexTable)`
  display: flex;
  margin-bottom: 20px;
`;

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

export const PageContainer = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 950px) {
    flex-direction: column-reverse;

    align-items: center;
  }
`;

export const BankDetails = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const BalanceCard = styled(BalanceCardComponent).attrs({
  maxWidth: "100%",
})``;

export const MoreCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  width: 100%;
`;

const bgColorMoreCard = {
  red: "linear-gradient(280.9deg, #FF4141 -0.25%, rgba(255, 65, 65, 0) 203.9%)",
  green:
    "linear-gradient(101.5deg, rgba(163, 255, 155, 0) -91.25%, #008603 99.12%)",
};

export const MoreCard = styled(Card).attrs({
  borderRadius: "10px",
  width: "48%",
  height: "102px",
  padding: "10px",
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* align-items: center; */
  /* justify-content: space-between; */
  position: relative;

  ${({ color }) => css`
    background: ${bgColorMoreCard[color || "red"]};
  `}
`;

export const MoreCardTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.white_1};

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const MoreCardName = styled.p`
  font-family: Jost Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme: { colors } }) => colors.white_1};

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const MoreCardValueContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 10px;
`;

export const MoreCardValueSymbol = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme: { colors } }) => colors.white_1};
  margin-right: 5px;

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    font-size: 9px;
    line-height: 12px;
  }
`;

export const MoreCardValue = styled.p`
  font-family: Jost Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: ${({ theme: { colors } }) => colors.white_1};

  @media (max-width: ${({ theme: { media } }) => media.mobile_landscape}) {
    font-size: 18px;
    line-height: 20px;
  }
`;
