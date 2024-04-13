import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step3() {
  const navigate = useNavigate();

  function handleYellowBtnClick() {
    navigate("/yellow");
  }

  function handleNextBtnClick() {
    navigate("/step4");
  }

  return (
    <>
      <QuestionContainer>
        <span>(3단계)</span>
        수출 규모는 어느 정도인가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleYellowBtnClick}>5백만 불 미만</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>5백만 불 이상 ~ 1천만 불 미만</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>1천만 불 이상</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
