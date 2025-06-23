import { useAIAssistant } from '../context/AIAssistantContext';
import Logo from './Logo';

const Navbar = () => {
  const { setIsAIOpen } = useAIAssistant();

  return (
    <nav className="bg-gray-900 border-b border-gray-800 fixed top-0 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold text-white">
          <div className="flex items-center gap-2">
          <Logo /> <span className="text-yellow-400 text-2xl font-bold">MovieMania</span>
          </div>
          </a>
          <button
            onClick={() => setIsAIOpen(prev => !prev)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <span>✨</span>
            AI Assistant
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;