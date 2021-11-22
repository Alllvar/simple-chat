import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-end;
  height: 100vh;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: flex-end;
  //background: #fff;
  //border-radius: 20px;
  height: 600px;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const ContactsButton = styled.button`
  position: absolute;
  top: 70px;
  left: 35px;
  margin: 15px;
  padding: 5px 15px;
  text-decoration: none;
  background: #58B9B6;
  color: #F4F5F0;
  border: 0;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1px;
  border-radius: 5px;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #E1BEE7;
  }
`;

export const UserName = styled.h1`
  position: absolute;
  top: 30px;
  left: 50px;
  margin: 0;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Lucida Console", "Courier New", monospace;

`;

export const LoadContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 539px;
  justify-content: space-between;
  position: absolute;
  top: 30px;
`;

export const Load = styled.button`
  background: #E1BEE7;
  color: #F4F5F0;
  border: 0;
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1px;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  transition: background 100ms ease-in-out;
  &:hover {
    background: #fff;
    color: black;
  }
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 650px;
  overflow-y: scroll;
  margin-bottom: 20px;
  background: #e6def6;
`;
