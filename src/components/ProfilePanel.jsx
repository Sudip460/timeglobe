import React, { useState, useEffect } from 'react';

const ProfilePanel = ({ isOpen, onClose, personality, onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    if (!isOpen) {
      setChatMessages([]);
      setMessage('');
    }
  }, [isOpen]);

  if (!isOpen || !personality) return null;

  const handleSend = async () => {
    if (!message.trim()) return;
    const userMsg = { sender: 'user', text: message };
    setChatMessages(prev => [...prev, userMsg]);
    setMessage('');

    try {
      const aiResponse = await onSendMessage(message, personality);
      const aiMsg = { sender: 'ai', text: aiResponse };
      setChatMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg = { sender: 'ai', text: 'Sorry, there was an error processing your request.' };
      setChatMessages(prev => [...prev, errorMsg]);
    }
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(58, 57, 57, 0.23)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 999,
      }} onClick={onClose} />

      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '520px',
        maxHeight: '85vh',
        overflowY: 'auto',
        backgroundColor: '#f4e4bc',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(139, 69, 19, 0.3)',
        color: '#5b4636',
        padding: '25px',
        zIndex: 1000,
        border: '2px solid #d4af37',
        fontFamily: "'Times New Roman', serif",
        fontStyle: 'italic',
        textShadow: '1px 1px 0 #e6d8c3',
        backgroundImage: 'linear-gradient(45deg, #f4e4bc 25%, transparent 25%), linear-gradient(-45deg, #f4e4bc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4e4bc 75%), linear-gradient(-45deg, transparent 75%, #f4e4bc 75%)',
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
      }}>
        <button onClick={onClose} style={{
          float: 'right',
          background: 'transparent',
          border: 'none',
          color: '#5b4636',
          fontSize: '28px',
          cursor: 'pointer',
          marginBottom: '15px',
          fontWeight: 'bold',
          lineHeight: '1',
        }}>×</button>

        <h2 style={{ marginBottom: '10px', fontWeight: '700', color: '#5b4636', fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>{personality.name}</h2>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7a6a58' }}><strong>Country:</strong> {personality.country}</p>
        <p style={{ margin: '5px 0', fontSize: '14px', color: '#7a6a58' }}><strong>Era:</strong> {personality.era}</p>
        <p style={{ margin: '15px 0', fontSize: '16px', lineHeight: '1.5', color: '#6b5b4b' }}>{personality.bio}</p>

        <h3 style={{ marginTop: '20px', marginBottom: '10px', color: '#5b4636', fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif" }}>Chat with {personality.name}</h3>
        <div style={{
          border: '1px solid #d4af37',
          height: '280px',
          overflowY: 'auto',
          padding: '15px',
          backgroundColor: '#f7f1e1',
          color: '#5b4636',
          borderRadius: '12px',
          marginBottom: '15px',
          fontSize: '14px',
          lineHeight: '1.4',
          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.05)',
          backgroundImage: 'linear-gradient(45deg, #f7f1e1 25%, transparent 25%), linear-gradient(-45deg, #f7f1e1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f7f1e1 75%), linear-gradient(-45deg, transparent 75%, #f7f1e1 75%)',
          backgroundSize: '10px 10px',
          backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px',
        }}>
          {chatMessages.map((msg, index) => (
            <p key={index} style={{ margin: '8px 0' }}>
              <strong style={{ color: msg.sender === 'user' ? '#a0522d' : '#8b4513' }}>
                {msg.sender === 'user' ? 'You' : personality.name}:
              </strong> {msg.text}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask a question..."
          style={{
            width: '75%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #d4af37',
            marginRight: '10px',
            outline: 'none',
            fontSize: '14px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            fontFamily: "'Times New Roman', serif",
            fontStyle: 'italic',
            color: '#5b4636',
            backgroundColor: '#f4e4bc'
          }}
        />
        <button onClick={handleSend} style={{
          padding: '12px 25px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#8b4513',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 8px rgba(139,69,19,0.3)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#5a2e0c'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#8b4513'}
        >Send</button>
      </div>
    </>
  );
};

export default ProfilePanel;
