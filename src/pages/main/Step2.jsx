import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step2() {
  const navigate = useNavigate();

  function handleYellowBtnClick() {
    navigate("/yellow");
  }

  function handleNextBtnClick() {
    navigate("/step3");
  }

  function handleRedBtnClick() {
    navigate("/red");
  }

  return (
    <>
      <QuestionContainer>
        <span>(2단계)</span>
        현재 진행 상황은 어떠한가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleYellowBtnClick}>계획 단계</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>LOI, MOU 단계</AnswerButton>
        <AnswerButton onClick={handleRedBtnClick}>계약 단계</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
