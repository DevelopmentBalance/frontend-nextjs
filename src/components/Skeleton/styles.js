import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "10px")};
  height: ${({ height }) => (height ? `${height}px` : "10px")};
  border-radius: ${({ circle }) => (circle ? "100%" : "5px")};

  background-color: ${({ isWhite }) => (isWhite ? "#0000001c" : "#ffffff21")};
  animation: 1.5s ease-in-out 0.5s infinite normal none running shine;
  background-size: 200% 100%;

  @keyframes shine {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
