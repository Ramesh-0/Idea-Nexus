import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './components/ui/input';
import Button from './components/ui/button';
import Label from './components/ui/label';
import axios from 'axios'; // Import axios

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      // Assuming the response contains a token and user data
      const { token, user } = response.data;

      // Store token in local storage or context
      localStorage.setItem('token', token);

      // Navigate to the profile page with user data
      navigate('/profile', {
        state: {
          email: user.email,
          username: user.username, // Replace with actual username from response
          institute: user.institute, // Replace with actual institute from response
          gender: user.gender, // Replace with actual gender from response
        },
      });

      setError(null); // Clear error if login is successful
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-purple-900 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8">Idea Nexus</h1>
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-purple-600">Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2"
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button type="submit" className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white">Login</Button>
          <Button 
            variant="outline" 
            className="w-full mt-4 text-purple-600 hover:text-purple-700 border border-purple-600 hover:border-purple-700"
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
