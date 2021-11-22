import { Link } from 'react-router-dom';
import {useState, useRef, useEffect} from "react";
import { addMessage } from '../../store/actions';
import { getMessages } from '../../store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './chat-message';
import ChatInput from './chat-input';
import {
	Container,
	ChatContainer,
	ContactsButton,
	UserName,
	Load,
	LoadContainer,
	MessagesContainer
} from './styles';

const Chat = () => {
	const [message, setMessage] = useState('');
	const [limit, setLimit] = useState(25);
	const dispatch = useDispatch();
	const messages = useSelector(getMessages);
	const userName = sessionStorage.getItem('user-name')
	const scrollEl = useRef();
	const filteredMessages = messages.filter(message => message.text !== "");
	console.warn(scrollEl)
	useEffect(() => {
		if(scrollEl) {
			scrollEl.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages.length])

	const handleMessageChange = (event) => {
		setMessage(event.target.value)
	};

	const handleMessageSubmit = (event) => {
		event.preventDefault();

		const userMessage = {
			name: userName,
			text: message,
			dateTime: new Date().toLocaleTimeString() + " " + new Date().toDateString()
		};

		dispatch(addMessage(userMessage))

		const history = localStorage.getItem('chat')

		if (history) {
			const parsedHistory = JSON.parse(history);
			localStorage.setItem('chat', JSON.stringify([...parsedHistory, userMessage]))
		} else {
			localStorage.setItem('chat', JSON.stringify([userMessage]))
		}

		setMessage('')
	};

	const onLoadMore = () => {

		return setLimit(limit + 25)
	}

	const onLoadLess = () => {
		if(limit <= 25) {
			return setLimit(25)
		}

		return setLimit(limit - 25)
	}

	const renderMessages = () => {
		return filteredMessages.slice(0, limit).map((message) => {
			return <ChatMessage
				key={message.dateTime}
				message={message.text}
				name={message.name}
				isMyMessage={message.name === userName}
			/>
		})
	}

	return (
		<Container>
			<Link to="/">
				<ContactsButton>
					Change your name
				</ContactsButton>
			</Link>
			<UserName>Your name - {userName}</UserName>
			<LoadContainer>
				<Load href="#" onClick={onLoadMore}>Load more</Load>
				<Load href="#" onClick={onLoadLess}>Load less</Load>
			</LoadContainer>
			<ChatContainer>
				<MessagesContainer>
					{renderMessages()}
					<div ref={scrollEl} />
				</MessagesContainer>
				<ChatInput
					handleMessageChange={handleMessageChange}
					handleMessageSubmit={handleMessageSubmit}
					message={message}
				/>
			</ChatContainer>
		</Container>
	);
}

export default Chat;
