import { useState } from 'react';

function CourseCard({ title, description, image, tags, videoUrl, summary }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMinimize = () => setIsMinimized(!isMinimized);
  const toggleMaximize = () => setIsMaximized(!isMaximized);
  const closeModal = () => {
    setShowDetails(false);
    setIsMinimized(false);
    setIsMaximized(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setShowDetails(true)}
      >
        Start Learning
      </button>

      {/* Modal */}
      {showDetails && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <div className={`bg-white rounded-xl shadow-lg border w-full max-w-3xl relative ${isMaximized ? "h-[90vh]" : "h-auto"}`}>
            {/* Top Bar with Controls */}
            <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-2 rounded-t-xl">
              <span className="font-semibold">{title}</span>
              <div className="space-x-2">
                <button
                  onClick={toggleMinimize}
                  title="Minimize"
                  className="text-white hover:text-yellow-300"
                >
                  🗕
                </button>
                <button
                  onClick={toggleMaximize}
                  title="Resize"
                  className="text-white hover:text-green-300"
                >
                  🗗
                </button>
                <button
                  onClick={closeModal}
                  title="Close"
                  className="text-white hover:text-red-400"
                >
                  ✖
                </button>
              </div>
            </div>

            {/* Body Content */}
            {!isMinimized && (
              <div className="p-4 overflow-auto max-h-[70vh]">
                <iframe
                  className="w-full h-64 mb-4 rounded"
                  src={videoUrl}
                  title="Course Video"
                  allowFullScreen
                ></iframe>
                <p className="text-gray-700 text-justify">{summary}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCard;
