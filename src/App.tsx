import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/portfolio/about" element={<HomePage />} />
            <Route path="/portfolio/skills" element={<SkillsPage />} />
            <Route path="/portfolio/projects" element={<ProjectsPage />} />
            <Route path="/portfolio/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App