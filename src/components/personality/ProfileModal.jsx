import { motion } from 'framer-motion'
import { useState } from 'react'
import useGlobeStore from '../../stores/globeStore'
import ChatInterface from './ChatInterface'

export default function ProfileModal() {
  const { selectedPerson, setSelectedPerson } = useGlobeStore(state => state)
  
  if (!selectedPerson) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedPerson(null)}
    >
      <motion.div 
        className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start">
            <img 
              src={selectedPerson.imageUrl || '/placeholder-avatar.jpg'} 
              alt={selectedPerson.name}
              className="w-32 h-32 rounded-full object-cover mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold">{selectedPerson.name}</h2>
              <p className="text-gray-600">
                {selectedPerson.birthYear} - {selectedPerson.deathYear || 'Present'}
              </p>
              <p className="mt-2">{selectedPerson.country}</p>
              <p className="mt-1 text-sm text-gray-500">{selectedPerson.category}</p>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Biography</h3>
            <p className="text-gray-700">{selectedPerson.bio}</p>
          </div>
          
          <ChatInterface personality={selectedPerson} />
        </div>
      </motion.div>
    </motion.div>
  )
}
