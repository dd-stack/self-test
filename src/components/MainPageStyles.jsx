import styled from "styled-components";

export const QuestionContainer = styled.div`
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0 60px 0;
`;

export const AnswerButton = styled.button`
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 10px;
`;
