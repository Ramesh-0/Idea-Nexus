import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaHome, FaUpload, FaUsers } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any user session data or tokens if needed
    // Example: localStorage.removeItem('userToken');

    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="w-64 h-full bg-purple-800 text-white flex flex-col">
      <div className="flex items-center justify-center p-4 bg-purple-900">
        <FaUserCircle className="text-4xl" />
        <h1 className="text-2xl ml-2">Idea Nexas</h1>
      </div>
      <nav className="flex-grow mt-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center p-4 hover:bg-purple-700 w-full text-left"
            >
              <FaHome className="mr-2" />
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/upload')}
              className="flex items-center p-4 hover:bg-purple-700 w-full text-left"
            >
              <FaUpload className="mr-2" />
              Upload
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/community')}
              className="flex items-center p-4 hover:bg-purple-700 w-full text-left"
            >
              <FaUsers className="mr-2" />
              Community
            </button>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="flex items-center p-4 hover:bg-purple-700 w-full text-left"
            >
              <AiOutlineLogout className="mr-2" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
