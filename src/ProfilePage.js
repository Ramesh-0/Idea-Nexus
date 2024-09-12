import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import Button from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import Input from "./components/ui/input";
import Label from "./components/ui/label";
import Sidebar from './SideBar';

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure user data from location.state
  const { username = 'John Doe', email = 'john.doe@example.com', institute = 'Example University', gender = 'male' } = location.state || {};

  const [name, setName] = useState(username);
  const [emailState, setEmail] = useState(email);
  const [instituteName, setInstituteName] = useState(institute);
  const [genderState, setGender] = useState(gender);
  const [isEditing, setIsEditing] = useState(false);
  const [posts] = useState([
    { id: 1, title: 'Post 1', date: '2022-01-01', description: 'This is the first post' },
    { id: 2, title: 'Post 2', date: '2022-01-15', description: 'This is the second post' },
    { id: 3, title: 'Post 3', date: '2022-02-01', description: 'This is the third post' },
  ]);

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleShareIdea = () => {
    navigate('/upload');
  };

  const getAvatarSrc = () => {
    switch (genderState) {
      case 'male':
        return 'https://example.com/avatar-male.png';
      case 'female':
        return 'https://example.com/avatar-female.png';
      case 'other':
        return 'https://example.com/avatar-other.png';
      default:
        return 'https://example.com/avatar-default.png';
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4 bg-purple-50">
        <Card className="bg-white shadow-md rounded-md p-4 border border-purple-200">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-purple-600">Profile</CardTitle>
            <CardDescription className="text-sm text-gray-500">View and edit your profile information.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={getAvatarSrc()} />
                <AvatarFallback>{genderState ? genderState.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
              </Avatar>
              <div>
                {isEditing ? (
                  <>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border border-purple-200 focus:ring-purple-500"
                      placeholder="Enter your name"
                    />
                    <Input
                      value={emailState}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border border-purple-200 focus:ring-purple-500 mt-2"
                      placeholder="Enter your email"
                    />
                    <Input
                      value={instituteName}
                      onChange={(e) => setInstituteName(e.target.value)}
                      className="border border-purple-200 focus:ring-purple-500 mt-2"
                      placeholder="Enter your institute"
                    />
                    <div className="mt-2">
                      <Label htmlFor="gender" className="text-purple-600">Gender</Label>
                      <select
                        id="gender"
                        value={genderState}
                        onChange={(e) => setGender(e.target.value)}
                        className="bg-white border border-gray-200 text-purple-600"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-bold text-purple-600">{name}</p>
                    <p className="text-sm text-gray-500">{emailState}</p>
                    <p className="text-sm text-gray-500">{instituteName}</p>
                    <p className="text-sm text-gray-500">{genderState}</p>
                  </>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            {isEditing ? (
              <Button
                variant="primary"
                onClick={handleSaveChanges}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Save Changes
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={handleEditProfile}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Edit Profile
              </Button>
            )}
          </CardFooter>
        </Card>
        <div className="mt-4">
          <h2 className="text-lg font-bold text-purple-600">Posts</h2>
          <div className="flex flex-col space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white shadow-md rounded-md p-4 border border-purple-200">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-purple-600">{post.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
