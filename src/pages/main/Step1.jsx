import styled from "styled-components";

const QuestionContainer = styled.div`
  width: 320px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #fff;
  border: #072e915e 1px solid;
  border-radius: 10px;
  padding-bottom: 10px;
  > span {
    color: #072e91;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 60px 0;
`;

const AnswerButton = styled.button`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 10px;
`;

export default function Step1() {
  return (
    <>
      <QuestionContainer>
        <span>(1단계)</span>
        수출하고자 하는 사업은 무엇인가요?
      </QuestionContainer>
      <ButtonsWrapper>
        <AnswerButton>EPC 수출</AnswerButton>
        <AnswerButton>산업 설비 수출</AnswerButton>
        <AnswerButton>단순 상품 및 제품 수출</AnswerButton>
      </ButtonsWrapper>
    </>
  );
}
