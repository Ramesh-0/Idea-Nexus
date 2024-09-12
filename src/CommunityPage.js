import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import Input from './components/ui/input';
import Button from './components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from './components/ui/avatar';
import { useUser } from './UserContext'; // Import the custom hook

const CommunityPage = () => {
  const { user } = useUser(); // Access user data from context
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, how are you?', user: 'John Doe' },
    { id: 2, text: 'I am good, thanks!', user: 'Jane Doe' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, user: user.username }]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action (e.g., form submission)
      handleSendMessage();
    }
  };

  return (
    <Card className="w-96 h-screen p-4 bg-purple-50 border border-purple-200">
      <CardHeader className="bg-purple-600 text-white">
        <CardTitle>Community Chat</CardTitle>
        <CardDescription>Connect and chat with other users</CardDescription>
      </CardHeader>
      <CardContent className="h-4/5 overflow-y-auto bg-purple-100 p-2">
        {messages.map((message) => (
          <div key={message.id} className="flex items-center mb-4 p-2 bg-purple-200 rounded-lg">
            <Avatar>
              <AvatarImage src={user.profilePic} />
              <AvatarFallback>{message.user.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="text-sm font-semibold text-purple-800">{message.user}</p>
              <p className="text-base text-purple-900">{message.text}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <div className="flex items-center bg-purple-200 p-2 border-t border-purple-300">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress} // Add key press handler
          placeholder="Type a message..."
          className="w-full border border-purple-300 rounded-lg"
        />
        <Button onClick={handleSendMessage} className="ml-2 bg-purple-600 text-white hover:bg-purple-700">
          Send
        </Button>
      </div>
    </Card>
  );
};

export default CommunityPage;
