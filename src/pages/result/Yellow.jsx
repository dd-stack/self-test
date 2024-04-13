import styled from "styled-components";
import { FiAlertOctagon } from "react-icons/fi";

const YellowContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #fff;
  border: #ffbf00dd 2px solid;
  padding: 20px 0;
  border-radius: 10px;
`;

const ExplainContainer = styled.div`
  width: 320px;
  text-align: left;
  color: #e6ac00;
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
  //font-weight: 600;
  > span {
    font-size: 0.8rem;
    // font-weight: 400;
  }
`;

const ContactsContainer = styled.div`
  width: 320px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 20px 0;
  border-radius: 10px;
  border: rgba(0, 0, 0, 0.8) 1px solid;
  background-color: #548235dc;
  color: #fff;
`;

const Contacts = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
`;

const ApplicationButton = styled.button`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

const NoneStyledLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

export default function Yellow() {
  return (
    <>
      <YellowContainer>
        잠깐! 어려운 부분이 있지만 <br />
        도와드릴 수 있습니다.
      </YellowContainer>
      <ExplainContainer>
        <FiAlertOctagon />
        이러한 경우에는 사업 참여를 위한 <br />
        &nbsp;&nbsp; 확인이나 지원 컨설팅이 필요합니다.
      </ExplainContainer>
      <ul>
        <UnorderedList>
          - 계획 단계인 경우
          <span>
            &nbsp;(발주처 및 외주사 발굴 여부,
            <br />
            &nbsp;&nbsp;LOI 또는 MOU 발급 가능 여부 등 확인 필요)
          </span>
        </UnorderedList>
        <UnorderedList>
          - 수출액이 5백만 불 미만인 경우
          <br />
          <span>&nbsp;&nbsp;(기술 아이템, 시장 개척 조사는 가능한 경우 소개)</span>
        </UnorderedList>
        <UnorderedList>
          - 회사의 매출이 50억 이하인 경우
          <br />
          <span>&nbsp;&nbsp;(특허, 공동 수행사 등 보강 확인 및 지원 방안 소개)</span>
        </UnorderedList>
        <UnorderedList>
          - 발주처의 매출이 1천만 불 미만인 경우
          <br />
          <span>&nbsp;&nbsp;(발주처의 공공성, 글로벌 모회사 등 보완 요소 확인)</span>
        </UnorderedList>
        <UnorderedList>
          - 제한 경쟁 입찰인 경우
          <br />
          <span>&nbsp;&nbsp;(발주처의 기술력 인정, 참여 요청 여부 등 확인 필요)</span>
        </UnorderedList>
      </ul>
      <ContactsContainer>
        무료 상담을 통해 사업 참여
        <br />
        가능성을 확인 및 보완해 보세요.
        <Contacts>
          자문 상담 이메일:&nbsp;
          <a href="mailto:kopia@kopia.or.kr">kopia@kopia.or.kr</a>
          <br />
          전문 컨설턴트:&nbsp;
          <a href="tel:01082550335">010-8255-0335</a>
        </Contacts>
      </ContactsContainer>
      <NoneStyledLink href="mailto:kopia@kopia.or.kr">
        <ApplicationButton>컨설팅 예약 신청</ApplicationButton>
      </NoneStyledLink>
      <NoneStyledLink href="mailto:samwoocsn@gmail.com">
        <ApplicationButton>맞춤형 외주사 매칭 프로그램 신청</ApplicationButton>
      </NoneStyledLink>
    </>
  );
}
