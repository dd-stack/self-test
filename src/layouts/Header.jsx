import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsArrowLeft, BsArrowClockwise } from "react-icons/bs";

const HeaderContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #072e915e;
  text-shadow: -1px 0px #fff, 0px 1px #fff, 1px 0px #fff, 0px -1px #fff;
  cursor: pointer;
  > svg {
    color: #fff;
    margin-right: 5px;
  }
`;

export default function Header() {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <HeaderContainer>
      <MenuButton onClick={handleBackClick}>
        <BsArrowLeft />
        뒤로가기
      </MenuButton>
      <MenuButton onClick={handleHomeClick}>
        <BsArrowClockwise />
        처음으로
      </MenuButton>
    </HeaderContainer>
  );
}
