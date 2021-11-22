import {
	Input,
	SubmitButton,
	Form, Fill
} from './styles';

const ChatInput = (props) => {
	const { handleMessageSubmit, handleMessageChange, message } = props;

	const scrollingElement = (document.body)
	function scrollToBottom () {
		scrollingElement.scrollTop = scrollingElement.scrollHeight;
	}
	return (
		<Form className="d-flex justify-content-center p-4 " onSubmit={handleMessageSubmit}>
			<Input
				type="textarea"
				placeholder="Enter message..."
				value={message}
				onChange={handleMessageChange}
			/>
			<SubmitButton type="submit" onClick={scrollToBottom}>
				Send
			</SubmitButton>
		</Form>
	);
};

export default ChatInput;
