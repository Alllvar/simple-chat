import React from 'react';
import {
	MessageContainer,
	Name,
	Message
} from './styles'

const ChatMessage = (props) => {
	const { name, message, isMyMessage } = props;
	return (
		<MessageContainer isMyMessage={isMyMessage}>
			<Name>
				<strong>{name}</strong>
			</Name>
			<Message>
				{message}
			</Message>
		</MessageContainer>

	);
};
export default ChatMessage;
