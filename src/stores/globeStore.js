import { create } from 'zustand'

const useGlobeStore = create((set) => ({
  selectedPerson: null,
  personalities: [],
  loading: false,
  error: null,
  
  setSelectedPerson: (person) => set({ selectedPerson: person }),
  setPersonalities: (data) => set({ personalities: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  
  fetchPersonalities: async () => {
    set({ loading: true })
    try {
      const response = await fetch('/api/personalities')
      const data = await response.json()
      set({ personalities: data, loading: false })
    } catch (err) {
      set({ error: err.message, loading: false })
    }
  }
}))

export default useGlobeStore
