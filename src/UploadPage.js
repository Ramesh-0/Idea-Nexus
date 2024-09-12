import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import Button  from "./components/ui/button";
import Input  from "./components/ui/input";
import Label  from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";

// Reusable InputField Component
function InputField({ id, label, value, onChange, placeholder, type = "text", className = '' }) {
  return (
    <div className="mb-4">
      <Label htmlFor={id} className="text-purple-600">{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-white border border-gray-200 ${className}`}
      />
    </div>
  );
}

// Main App Component
export default function UploadPage() {
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectCategory: '',
    projectTags: '',
    githubRepository: '',
  });

  const categories = ['Art', 'Science', 'Technology', 'Engineering', 'Mathematics'];

  const navigate = useNavigate();  // Initialize navigate

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleProjectSubmit = () => {
    const { projectTitle, projectDescription, projectCategory, githubRepository } = formData;

    // Basic validation
    if (!projectTitle || !projectDescription || !projectCategory || !githubRepository) {
      alert('Please fill in all the required fields!');
      return;
    }

    console.log('Project submitted:', formData);
  };

  const handleCancel = () => {
    navigate('/profile');  // Redirect to the ProfilePage
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gradient-to-r from-purple-900 to-purple-600 text-purple-100">
      <Card className="bg-white shadow-md">
        <CardHeader className="bg-white border-b border-gray-200">
          <CardTitle className="text-purple-600">Post Your Project</CardTitle>
          <CardDescription className="text-purple-600">Share your project with the community</CardDescription>
        </CardHeader>

        <CardContent>
          <InputField
            id="project-title"
            label="Project Title"
            value={formData.projectTitle}
            onChange={handleInputChange('projectTitle')}
            placeholder="Enter project title"
          />

          <div className="mb-4">
            <Label htmlFor="project-description" className="text-purple-600">Project Description</Label>
            <Textarea
              id="project-description"
              value={formData.projectDescription}
              onChange={handleInputChange('projectDescription')}
              className="bg-white border border-gray-200"
              placeholder="Enter project description"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="project-category" className="text-purple-600">Project Category</Label>
            <Select>
              <SelectTrigger className="w-[180px] bg-white border border-gray-200">
                <SelectValue placeholder="Select Category" className="text-purple-600" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    onClick={() => setFormData({ ...formData, projectCategory: category })}
                    className="bg-white hover:bg-gray-100 text-purple-600"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <InputField
            id="project-tags"
            label="Project Tags"
            value={formData.projectTags}
            onChange={handleInputChange('projectTags')}
            placeholder="Enter project tags"
          />

          <InputField
            id="github-repository"
            label="Github Repository Link"
            value={formData.githubRepository}
            onChange={handleInputChange('githubRepository')}
            placeholder="Enter GitHub repository URL"
          />
        </CardContent>

        <CardFooter className="bg-white border-t border-gray-200 flex space-x-4">
          <Button variant="primary" className="bg-purple-600 hover:bg-purple-500" onClick={handleProjectSubmit}>
            Post Project
          </Button>
          <Button variant="secondary" className="bg-gray-600 hover:bg-gray-500" onClick={handleCancel}>
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
