import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;



    const renderReadReceipts = (message, isMyMessage) => {
        chat.people.map((person, index) => person.last_read === message.id && (
            <div
                key={`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: person.person.avatar && `url(${person?.person?.avatar})`
                }}
            />
        ))
    }
    const chat = chats && chats[activeChat];
    console.log(chat, userName, messages);

    // functional component (rendermessages)for generating messages
    const renderMessages = () => {
        const keys = Object.keys(messages);//this takes our keys from messages and put it into it


        return keys.map((key, index) => { //this is used to render our messages 
            const message = messages[key];   //here we dynamically takes messages with this specific key  
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;

            return ( //act as a message
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {
                            isMyMessage //if it is my message then 
                                ? <MyMessage message={message} /> //just call as a component my message
                                : <TheirMessage message={message} //if not then we render new component 
                                    lastMessage={message[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipt" style={{
                        marginRight: isMyMessage ? '18px' : '0px',
                        marginLeft: isMyMessage ? '0px' : '68px'
                    }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        })
    }
    if (!chat) return 'loading...';

    return (
        <div className="chat-feed">
            <div className="chat-title-container" >
                <div className="chat-title">
                    {chat.title}
                </div>

                <div className="chat-subtitle">
                    {chat.people.map((person) =>
                        ` ${person.person.username}`
                    )}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />  {/* form in whichwe can write messages */}
            </div>
        </div>
    );

};
export default ChatFeed;