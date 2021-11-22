import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: ${({ isMyMessage }) => isMyMessage ? 'flex-end' : 'flex-start'};
  background: ${({ isMyMessage }) => isMyMessage ? '#fff' : '#c4e2ed'};
  margin: 5px;
  padding: 5px 20px;
  border-radius: 18px;
`;

export const Name = styled.div`
    display: flex;
	  align-self: flex-end;
`;

export const Message = styled.div`
	max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;
