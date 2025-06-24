import webImg from '../assets/web.png';
import dsaImg from '../assets/dsa.png';
import mlImg from '../assets/ml.png';
import cloudImg from '../assets/cloud.png';
import pythonImg from '../assets/python.png';

import { useState } from "react";
import CourseCard from "../components/CourseCard";

const courseData = [
  {
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript, React and more.',
    image: webImg,
    tags: ['#Web', '#Frontend'],
    videoUrl: 'https://www.youtube.com/embed/Zftx68K-1D4',
    summary: 'This course covers the complete frontend stack using HTML, CSS, JS, and React.'
  },
  {
    title: 'Data Structures',
    description: 'Master arrays, trees, graphs, and algorithms.',
    image: dsaImg,
    tags: ['#DSA', '#Logic'],
    videoUrl: 'https://www.youtube.com/embed/8hly31xKli0',
    summary: 'Understand core data structures with practical coding demos.'
  },
  {
    title: 'Machine Learning',
    description: 'Dive into supervised and unsupervised learning.',
    image: mlImg,
    tags: ['#AI', '#ML'],
    videoUrl: 'https://www.youtube.com/embed/GwIo3gDZCVQ',
    summary: 'Learn the fundamentals of Machine Learning including regression, classification, and clustering.'
  },
  {
    title: 'Cloud Computing',
    description: 'Explore AWS, Azure, and cloud infrastructure.',
    image: cloudImg,
    tags: ['#Cloud', '#AWS'],
    videoUrl: 'https://www.youtube.com/embed/2LaAJq1lB1Q',
    summary: 'Get introduced to cloud services and deployment models.'
  },
  {
    title: 'Python Programming',
    description: 'Learn Python from basics to advanced.',
    image: pythonImg,
    tags: ['#Python', '#Backend'],
    videoUrl: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
    summary: 'This course takes you from basic syntax to advanced Python concepts and modules.'
  }
];

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Explore Courses</h2>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
              tags={course.tags}
              videoUrl={course.videoUrl}
              summary={course.summary}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Courses;
