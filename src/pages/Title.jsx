import styled from "styled-components";

import logo from "../assets/logo.png";

const EntireContainer = styled.div`
  margin-top: 60pt;
`;

const TitleText = styled.h1`
  margin-top: 10pt;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.7;
`;

const StartButton = styled.button`
  margin-top: 30pt;
`;

export default function Title() {
  return (
    <EntireContainer>
      <img src={logo} width="150px" alt="KOPIA logo" />
      <TitleText>
        시장 개척 지원 사업
        <br />
        자가 진단
      </TitleText>
      <StartButton>시작하기</StartButton>
    </EntireContainer>
  );
}
