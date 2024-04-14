import styled from "styled-components";
import { FiAlertCircle } from "react-icons/fi";
import {
  EntireContainer,
  ContactsContainer,
  Contacts,
  ApplicationButton,
  NoneStyledLink,
} from "../../components/ResultPageStyles";

const GreenContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #fff;
  border: #548235dc 2px solid;
  padding: 20px 0;
  border-radius: 10px;
`;

const ExplainContainer = styled.div`
  width: 320px;
  text-align: left;
  color: #43682adc;
  font-weight: 600;
  margin-top: 20px;
  > svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`;

const UnorderedList = styled.li`
  width: 320px;
  text-align: left;
  margin-top: 20px;
`;

export default function Green() {
  return (
    <EntireContainer>
      <GreenContainer>
        축하합니다!
        <br />
        사업 접수 기간을 확인하세요.
      </GreenContainer>
      <ExplainContainer>
        <FiAlertCircle />
        추진 사업에 따라 다음 3가지 사업 중 <br />
        &nbsp;&nbsp; 하나를 신청하실 수 있습니다.
      </ExplainContainer>
      <ul>
        <UnorderedList>
          - 타당성 조사 사업: <br />
          &nbsp;&nbsp; 1) EPC 사업 <br />
          &nbsp;&nbsp; 2) 공정 설비 사업
        </UnorderedList>
        <UnorderedList>
          - 시장 개척 조사 사업: <br />
          &nbsp;&nbsp;3) 시장 조사 지원 사업
        </UnorderedList>
      </ul>
      <ContactsContainer>
        무료 상담을 통해 <br />
        사업 관련 지원 컨설팅을 받아보세요.
        <Contacts>
          자문 상담 이메일:&nbsp;
          <a href="mailto:kopia@kopia.or.kr">kopia@kopia.or.kr</a>
          <br />
          전문 컨설턴트:&nbsp;
          <a>010-8255-0335</a>
        </Contacts>
      </ContactsContainer>
      <NoneStyledLink href="mailto:kopia@kopia.or.kr">
        <ApplicationButton>컨설팅 예약 신청</ApplicationButton>
      </NoneStyledLink>
      <NoneStyledLink href="mailto:samwoocsn@gmail.com">
        <ApplicationButton>맞춤형 외주사 매칭 프로그램 신청</ApplicationButton>
      </NoneStyledLink>
      <NoneStyledLink href="mailto:samwoocsn@gmail.com">
        <ApplicationButton>
          시장 개척 지원 사업 제안서
          <br />
          자문 컨설팅 신청
        </ApplicationButton>
      </NoneStyledLink>
    </EntireContainer>
  );
}
