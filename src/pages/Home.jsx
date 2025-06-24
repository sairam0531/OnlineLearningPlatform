import bgImage from '../assets/background.jpg'; // ✅ your local image path

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Online Learning Platform</h1>
        <p className="text-lg text-gray-200">
          Learn anything, anytime, anywhere.
        </p>
      </div>
    </div>
  );
}

export default Home;
