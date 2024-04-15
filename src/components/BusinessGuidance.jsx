import styled from "styled-components";

const EntireContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;

const DividingLine = styled.div`
  width: 100%;
  height: 50px;
  border-top: #072e915e 2px solid;
  margin: 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LinkButton = styled.div`
  width: 130px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 3px 3px #072e9160;
  cursor: pointer;
  &:hover {
    color: #072e91c0;
  }
`;

const NoneStyledLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

export default function BusinessGuidance() {
  return (
    <EntireContainer>
      <DividingLine />
      {/*실제 사이트 주소로 변경 필요*/}
      <ButtonsWrapper>
        <NoneStyledLink
          href="http://kswtc.com/default/main/notice.php?com_board_basic=read_form&com_board_idx=92&com_board_id=5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkButton>
            F/S 사업 안내
            <br />
            카드 뉴스
          </LinkButton>
        </NoneStyledLink>
        <NoneStyledLink
          href="https://www.youtube.com/watch?v=fnnycnElnNM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkButton>
            F/S 사업 안내
            <br />
            동영상
          </LinkButton>
        </NoneStyledLink>
      </ButtonsWrapper>
    </EntireContainer>
  );
}
