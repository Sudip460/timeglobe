import { useState } from 'react';
import GlobeComponent from './components/Globe';
import SearchBar from './components/SearchBar';
import ProfilePanel from './components/ProfilePanel';
import { personalities, countries } from './data/personalities';
import { chatWithPersonality } from './utils/ai';
import './App.css';

function App() {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleSelectPersonality = (personality) => {
    setSelectedPersonality(personality);
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
    setSelectedPersonality(null);
  };

  const handleSendMessage = async (message, personality) => {
    return await chatWithPersonality(message, personality);
  };

  return (
    <div className="App">
      <GlobeComponent
        personalities={personalities}
        countries={countries}
        onSelectPersonality={handleSelectPersonality}
      />
      <SearchBar
        personalities={personalities}
        onSelectPersonality={handleSelectPersonality}
      />
      <ProfilePanel
        isOpen={isProfileOpen}
        onClose={handleCloseProfile}
        personality={selectedPersonality}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
