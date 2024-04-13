import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const EntireContainer = styled.div`
  margin-top: 80px;
`;

const TitleText = styled.h1`
  margin-top: 15px;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.7;
`;

const StartButton = styled.button`
  margin-top: 40px;
  font-size: 1.4rem;
  font-weight: 600;
`;

export default function Title() {
  const navigate = useNavigate();

  function handleStartClick() {
    navigate("/step1");
  }

  return (
    <EntireContainer>
      <a href="https://www.kopia.or.kr/" target="_blank" rel="noopener noreferrer">
        <img src={logo} width="150px" alt="KOPIA logo" />
      </a>
      <TitleText>
        시장 개척 지원 사업
        <br />
        자가 진단
      </TitleText>
      <StartButton onClick={handleStartClick}>시작하기</StartButton>
    </EntireContainer>
  );
}
