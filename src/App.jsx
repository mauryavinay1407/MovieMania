import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar';
import AIAssistantPanel from './components/AIAssistantPanel';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white pt-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <AIAssistantPanel />
      </div>
    </Router>
  );
};

export default App;
