// Example App.tsx or routes configuration
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index'; // Your homepage
import HowItWorks from '@/pages/HowItWorks'; // New page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
