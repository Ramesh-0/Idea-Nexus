import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './components/ui/input';
import Button from './components/ui/button';
import Label from './components/ui/label';
import axios from 'axios'; // Import axios

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [institute, setInstitute] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:3000/signup', {
          username,
          email,
          password,
          institute,
          gender,
        });

        // Assuming the response indicates successful signup
        if (response.status === 201) {
          navigate('/login'); // Redirect to login page after successful signup
        }

        setError(null); // Clear error if signup is successful
      } catch (error) {
        setError('Signup failed. Please try again.');
      }
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-purple-900 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-8">Sign Up</h1>
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-purple-600">Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm your password"
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="institute">Institute Name</Label>
            <Input
              id="institute"
              value={institute}
              onChange={(event) => setInstitute(event.target.value)}
              placeholder="Enter your institute"
              className="mt-2"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              className="mt-2 bg-white border border-gray-200"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button type="submit" className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
        </form>
      </div>
    </div>
  );
}
