import styled from "styled-components";
import { FiAlertTriangle } from "react-icons/fi";

const RedContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #fff;
  border: #ff505099 2px solid;
  padding: 20px 0;
  border-radius: 10px;
`;

const ExplainContainer = styled.div`
  width: 320px;
  text-align: left;
  color: #ee4c4c9e;
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
  // font-weight: 600;
  > span {
    display: block;
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

export default function Red() {
  return (
    <>
      <RedContainer>
        앗! 아쉽지만 시장 개척 사업에 <br />
        참여하기 어렵습니다.
      </RedContainer>
      <ExplainContainer>
        <FiAlertTriangle />
        이러한 경우는 시장 개척 사업에 적합
        <br />
        &nbsp;&nbsp; 하지 않습니다.
      </ExplainContainer>
      <ul>
        <UnorderedList>- 단순 상품이나 제품의 수출의 경우</UnorderedList>
        <UnorderedList>- 계약이 성사된 경우</UnorderedList>
        <UnorderedList>
          - 발주처의 매출이나 규모가 적을 경우
          <span>&nbsp;&nbsp;(수출 아이템과 현지 상황에 따라 가능할 수 있음)</span>
        </UnorderedList>
        <UnorderedList>
          - 경쟁입찰로 수주 가능성이 적을 경우
          <span>&nbsp;&nbsp;(수출 아이템과 현지 상황에 따라 가능할 수 있음)</span>
        </UnorderedList>
      </ul>
      <ContactsContainer>
        하지만 일단 무료 상담을 통해 <br />
        참여 가능 여부를 다시 확인해 보세요.
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
