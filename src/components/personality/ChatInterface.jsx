import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ChatInterface({ personality }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)
  
  const initialMessage = {
    text: `Hello! I am ${personality.name}. How can I help you learn about ${personality.birthYear !== personality.deathYear ? `my life in the ${Math.floor(personality.birthYear/100)*100}s` : 'my work'}?`,
    sender: 'ai'
  }
  
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([initialMessage])
    }
  }, [personality])
  
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return
    
    const userMessage = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
    
    try {
      const response = await fetch('/api/personalities/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalityId: personality._id,
          message: input,
          history: messages
        })
      })
      
      const data = await response.json()
      setMessages(prev => [...prev, { text: data.reply, sender: 'ai' }])
    } catch (err) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I'm having trouble responding right now.", 
        sender: 'ai' 
      }])
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="mt-6 border-t pt-4">
      <h3 className="text-xl font-semibold mb-4">Chat with {personality.name}</h3>
      
      <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={`inline-block px-4 py-2 rounded-lg ${
              msg.sender === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="text-left">
            <div className="inline-block px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={`Ask ${personality.name} a question...`}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 disabled:bg-blue-300"
          disabled={loading || !input.trim()}
        >
          Send
        </button>
      </form>
    </div>
  )
}
