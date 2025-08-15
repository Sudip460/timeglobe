import { useEffect } from 'react'
import useGlobeStore from './stores/globeStore'
import Globe from './components/globe/Globe'
import ProfileModal from './components/personality/ProfileModal'
import SearchBar from './components/ui/SearchBar'

function App() {
  const { fetchPersonalities } = useGlobeStore()

  useEffect(() => {
    fetchPersonalities()
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Globe Canvas */}
      <div className="absolute inset-0">
        <Globe />
      </div>
      
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-white drop-shadow-lg">TimeGlobe</h1>
          <SearchBar />
        </div>
      </div>
      
      {/* Profile Modal */}
      <ProfileModal />
    </div>
  )
}

export default App
