import { useNavigate } from "react-router-dom";
import { QuestionContainer, ButtonsWrapper, AnswerButton } from "../../components/MainPageStyles";

export default function Step1() {
  const navigate = useNavigate();

  function handleNextBtnClick() {
    navigate("/step2");
  }

  function handleRedBtnClick() {
    navigate("/red");
  }

  return (
    <>
      <QuestionContainer>
        <span>(1단계)</span>
        수출하고자 하는 사업은 무엇인가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton onClick={handleNextBtnClick}>EPC 수출</AnswerButton>
        <AnswerButton onClick={handleNextBtnClick}>산업 설비 수출</AnswerButton>
        <AnswerButton onClick={handleRedBtnClick}>단순 상품 및 제품 수출</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
