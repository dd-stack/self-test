import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step4() {
  const navigate = useNavigate();

  function handleYellowBtnClick() {
    navigate("/yellow");
  }

  function handleNextBtnClick() {
    navigate("/step5");
  }

  return (
    <>
      <QuestionContainer>
        <span>(4단계)</span>
        귀사의 연간 매출은 어느 정도인가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleYellowBtnClick}>50억 미만</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>50억 이상 ~ 100억 미만</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>100억 이상</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
