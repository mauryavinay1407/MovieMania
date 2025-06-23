import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Loader from './Loader';

const MovieAIAssistant = ({ movieTitle, movieOverview }) => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState('');

  const cleanResponse = (response) => {
    const cleanedText = response.replace(
      /Movie:.*\nPlot:.*\nQuestion:.*\n/,
      ''
    );
    return cleanedText.replace(/<\/?think>/g, '').trim();
  };

  const askAI = async () => {
    if (!question) return;

    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const promptParts = [
        { text: `Movie: ${movieTitle || 'Unknown'}` },
        { text: `Plot: ${movieOverview || 'No plot available'}` },
        { text: `Question: ${question}` },
      ];
      
      const result = await model.generateContent({
        contents: [{ role: 'user', parts: promptParts }],
      });
      console.log('AI Response:', result);
      const text = result.response.text();
      setResponse(cleanResponse(text));
    } catch (error) {
      console.error('AI Error:', error);
      setResponse('Sorry, I had trouble processing that request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-semibold text-white mb-4">
        Ask AI About This Movie
      </h3>

      <div className="flex gap-1 mb-4 ">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about this movie..."
          className="flex-1 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={askAI}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader h={'4'} w={'4'} color={'gray-100'}/> : '➤'}
        </button>
      </div>

      {response && (
        <div className="bg-gray-700 rounded p-4 mt-4">
          <p className="text-gray-200 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
};

export default MovieAIAssistant;
