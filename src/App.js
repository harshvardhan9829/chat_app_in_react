import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {

    if(!localStorage.getItem('username')) return<LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="245e126c-583c-44c9-a104-4ee61209ffd2"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps}/>}
        />
    );
}


export default App;