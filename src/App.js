import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom';

import PlayfulYesNo from './PlayfulYesOrNo/PlayfulYesOrNo';
import FloorPlan from './FloorPlan/FloorPlan';
import RoadTripScene from './RoadTrip/RoadTrip';
import CinemaScene from './Cinema/Cinema';
import StarryNight from './StarryNight/StarryNight';
import './App.css';

// Scenes data
const scenes = [
  { key: 'floor', label: 'This one is awesome, but this is secret', status: 'upcoming' },
  { key: 'cinema', label: 'Cinema', status: 'done' },
  { key: 'trip', label: 'Road Trip', status: 'done' },
  { key: 'night', label: 'Starry Night', status: 'upcoming' },
  { key: 'chess', label: 'Chess', status: 'upcoming' },
  { key: 'boulder', label: 'Boulder hiking', status: 'upcoming' },
  { key: 'more', label: 'many more will be added...', status: 'upcoming' },
];

// This component renders cards and navigates on click
function SceneSelector() {
  const navigate = useNavigate();

  return (
    <>
      <h2>What we did</h2>
      <div className="card-container">
        {scenes
          .filter((s) => s.status === 'done')
          .map((s) => (
            <div
              key={s.key}
              className="scene-card"
              onClick={() => navigate(`/scene/${s.key}`)}
            >
              {s.label}
            </div>
          ))}
      </div>

      <h2>Upcoming</h2>
      <div className="card-container upcoming">
        {scenes
          .filter((s) => s.status === 'upcoming')
          .map((s) => (
            <div key={s.key} className="scene-card upcoming disabled">
              {s.label}
            </div>
          ))}
      </div>
    </>
  );
}

// This component renders the current scene based on URL param
function SceneRenderer() {
  const { sceneKey } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{ marginBottom: '1rem', padding: '0.5rem 1rem' }}
      >
        ← Back
      </button>
      {(() => {
        switch (sceneKey) {
          case 'floor':
            return <FloorPlan />;
          case 'cinema':
            return <CinemaScene />;
          case 'trip':
            return <RoadTripScene />;
          case 'night':
            return <StarryNight />;
          case 'chess':
            return <div>Upcoming</div>;
          default:
            return <div>Select a scene from above.</div>;
        }
      })()}
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Listen for Enter key ONLY when intro is visible
  useEffect(() => {
    if (!showIntro) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        setShowIntro(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showIntro]);

  const handleIntroDone = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <PlayfulYesNo onComplete={handleIntroDone} />;
  }

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SceneSelector />} />
          <Route path="/scene/:sceneKey" element={<SceneRenderer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
