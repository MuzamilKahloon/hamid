import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Send } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState([]);
  const [response, setResponse] = useState('');

  const handleSend = () => {
    if (query.trim() === '') return;

    const newHistory = [...history, query];
    setHistory(newHistory);
    setResponse(`Your response for: "${query}"`); // Placeholder response
    setQuery('');
  };

  return (
    <div>
    <div className="flex h-screen text-white bg-black">
      {/* Left Sidebar with Navbar & Lowered History Section */}
      <div className="flex flex-col w-1/4 bg-black border-r border-gray-700">
      <Navbar />
        {/* Navbar at the top */}
        <div className="p-4 border-b border-gray-700">
         
        </div>

        {/* Empty Space to push history down */}
        <div className="h-16"></div>

        {/* History Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          <h2 className="mb-4 text-lg font-bold">History</h2>
          <ul className="space-y-2">
            {history.map((item, index) => (
              <li key={index} className="p-2 bg-gray-800 rounded">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-col flex-1">
        {/* Chat Display */}
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="w-3/4 p-6 overflow-y-auto text-white bg-gray-900 rounded-lg shadow-lg h-3/4">
            {response ? (
              <p className="text-lg font-semibold">{response}</p>
            ) : (
              <p className="text-center text-gray-500">Your response will appear here...</p>
            )}
          </div>
        </div>

        {/* Input Field & Send Button - Fixed Bottom */}
        <div className="flex items-center justify-center w-full p-4 bg-black">
          <div className="flex items-center w-3/4 bg-gray-900 border border-gray-700 rounded-lg">
            <input
              type="text"
              className="flex-1 px-4 py-3 text-white bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="flex items-center px-6 py-3 ml-3 text-white bg-blue-600 rounded-r-lg hover:bg-blue-500"
              onClick={handleSend}
            >
              <Send size={20} className="mr-1" /> Send
            </button>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
