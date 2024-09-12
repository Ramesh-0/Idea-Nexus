import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
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
  const [chatbotVisible, setChatbotVisible] = useState(true); // Set to true to have the chatbot visible by default
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const injectScript = (src, id, callback) => {
      const existingScript = document.getElementById(id);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = callback; // Call the callback when the script is loaded
        document.body.appendChild(script);
        console.log(`Script with id ${id} injected`);
      } else {
        console.log(`Script with id ${id} already exists`);
        if (callback) callback();
      }
    };

    const initializeBotpress = () => {
      if (window.botpressWebChat) {
        window.botpressWebChat.init({
          host: 'https://cdn.botpress.cloud', // Replace with your Botpress host URL
          botId: 'your-bot-id', // Replace with your Botpress bot ID
          // Other configuration options if needed
        });
        console.log('Botpress chat widget initialized');
      } else {
        console.log('Botpress WebChat not found');
      }
    };

    if (chatbotVisible) {
      injectScript('https://cdn.botpress.cloud/webchat/v2.1/inject.js', 'botpress-webchat', () => {
        injectScript('https://mediafiles.botpress.cloud/69b3bbc6-6c3f-4696-ab66-fd951180e7b3/webchat/v2.1/config.js', 'botpress-webchat-config', initializeBotpress);
      });
    } else {
      // Remove scripts when not visible
      const script1 = document.getElementById('botpress-webchat');
      const script2 = document.getElementById('botpress-webchat-config');
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    }

    // Cleanup script on component unmount
    return () => {
      const script1 = document.getElementById('botpress-webchat');
      const script2 = document.getElementById('botpress-webchat-config');
      if (script1) document.body.removeChild(script1);
      if (script2) document.body.removeChild(script2);
    };
  }, [chatbotVisible]);

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

  const goToProfilePage = () => {
    navigate('/profile'); // Navigate to the profile page
  };

  return (
    <div className="relative w-full h-screen">
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

      {/* Button to go back to Profile Page */}
      <div className="fixed top-4 right-4">
        <Button onClick={goToProfilePage} className="bg-blue-600 text-white hover:bg-blue-700">
          Go to Profile
        </Button>
      </div>

      {/* Conditional rendering of the Botpress widget */}
      {chatbotVisible && (
        <div className="fixed bottom-4 right-4">
          {/* Botpress widget will be injected dynamically */}
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
