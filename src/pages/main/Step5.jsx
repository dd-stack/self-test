import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step5() {
  const navigate = useNavigate();

  function handleRedBtnClick() {
    navigate("/red");
  }

  function handleYellowBtnClick() {
    navigate("/yellow");
  }

  function handleNextBtnClick() {
    navigate("/step6");
  }

  return (
    <>
      <QuestionContainer>
        <span>(5단계)</span>
        발주처의 매출은 어느 정도인가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleRedBtnClick}>5백만 불 미만</AnswerButton>
        <AnswerButton onClick={handleYellowBtnClick}>5백만 불 이상 ~ 1천만 불 미만</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>1천만 불 이상</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
