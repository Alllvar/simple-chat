import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../chat/chat-input/styles";
import { SubmitButton } from "../chat/chat-input/styles";

const Login = () => {
  let input;
  const [value, setValue] = useState('');

  const onChange = event => {
    sessionStorage.setItem('user-name', event.target.value);

    setValue(event.target.value);
  };

  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      input.value = ''
    }}>
      <Input onChange={onChange} value={value} ref={node => input = node} type="text" placeholder="Enter your name"/>
      <Link style={{ textDecoration: 'none'}} to="/chat">
        <SubmitButton type="submit">
          Confirm
        </SubmitButton>
      </Link>
    </form>
  );
}

export default Login;
