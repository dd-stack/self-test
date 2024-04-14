import styled from "styled-components";

export const EntireContainer = styled.div`
  margin-bottom: 80px;
`;

export const ContactsContainer = styled.div`
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

export const Contacts = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const ApplicationButton = styled.button`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const NoneStyledLink = styled.a`
  &:hover {
    text-decoration: none;
  }
`;
