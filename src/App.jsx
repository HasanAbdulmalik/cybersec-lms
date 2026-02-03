import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Module from './pages/Module';
import Certificate from './pages/Certificate';

function App() {
  const [completedModules, setCompletedModules] = useState([]);

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules(prev => [...prev, moduleId]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout completedModules={completedModules} />}>
          <Route index element={<Landing />} />
          <Route
            path="module/:id"
            element={<Module onComplete={handleModuleComplete} />}
          />
          <Route path="certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
