import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step6() {
  const navigate = useNavigate();

  function handleGreenBtnClick() {
    navigate("/green");
  }

  function handleYellowBtnClick() {
    navigate("/yellow");
  }

  function handleRedBtnClick() {
    navigate("/red");
  }

  return (
    <>
      <QuestionContainer>
        <span>(6단계)</span>
        계약 예정 형태는 어떠한가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleGreenBtnClick}>수의계약</AnswerButton>
        <AnswerButton onClick={handleYellowBtnClick}>제한 경쟁 입찰</AnswerButton>
        <AnswerButton onClick={handleRedBtnClick}>경쟁 입찰</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
