import { useState, useEffect } from 'react'
import useGlobeStore from '../../stores/globeStore'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const { personalities, setSelectedPerson } = useGlobeStore()
  
  useEffect(() => {
    if (query.length > 2) {
      const filtered = personalities.filter(person =>
        person.name.toLowerCase().includes(query.toLowerCase()) ||
        person.country.toLowerCase().includes(query.toLowerCase()) ||
        person.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setShowResults(true)
    } else {
      setResults([])
      setShowResults(false)
    }
  }, [query, personalities])
  
  const handleResultClick = (person) => {
    setSelectedPerson(person)
    setQuery('')
    setShowResults(false)
  }
  
  return (
    <div className="relative w-full max-w-md mx-4">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search historical figures..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm bg-white bg-opacity-90"
        />
        <div className="absolute right-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {showResults && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            results.map(person => (
              <div
                key={person._id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => handleResultClick(person)}
              >
                <img 
                  src={person.imageUrl || '/placeholder-avatar.jpg'} 
                  alt={person.name}
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium text-gray-900">{person.name}</p>
                  <p className="text-xs text-gray-500">
                    {person.country} • {person.category}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}
