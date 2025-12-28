import styled from "styled-components";

export const AppMainCover = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.bg};
`;

export const AppBgSec = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 65%;
  height: 100vh;
  background: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
