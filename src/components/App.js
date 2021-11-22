import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { setMessages } from '../store/actions';
import { useEffect } from "react";

import Login from './login/index';
import Chat from './chat';

import { ApplicationContainer } from './styles';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const chatHistory = localStorage.getItem('chat')

    if(chatHistory) {
      const parsedHistory = JSON.parse(chatHistory);

      dispatch(setMessages(parsedHistory))
    }
  }, [dispatch])

  return (
    <ApplicationContainer className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/chat" component={Chat}/>
          <Route path="/" component={Login}/>
        </Switch>
      </BrowserRouter>
    </ApplicationContainer>
  );
};

export default App;
