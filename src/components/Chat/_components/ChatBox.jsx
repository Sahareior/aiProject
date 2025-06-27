import React, { useEffect, useRef, useState } from 'react';
import {
  FaRegCopy,
  FaThumbsUp,
  FaRegThumbsUp,
  FaSyncAlt
} from 'react-icons/fa';

const ChatBox = ({ chat, onRegenerate }) => {
  const bottomRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [likes, setLikes] = useState({});
  const prevChatLengthRef = useRef(0);

  
  useEffect(() => {
    if (chat && chat.length > 0 && (prevChatLengthRef.current === 0 || chat[0].id !== displayedMessages[0]?.id)) {
      setDisplayedMessages([]);
      prevChatLengthRef.current = chat.length;
    }
  }, [chat]);


  useEffect(() => {
    if (!chat || chat.length === 0 || displayedMessages.length >= chat.length) return;

    const nextMessage = chat[displayedMessages.length];
    if (!nextMessage) return;

    if (nextMessage.sent_by === 'user') {
    
      setDisplayedMessages(prev => [...prev, nextMessage]);
    } else {
      
      setTyping(true);
      const timer = setTimeout(() => {
        setTyping(false);
        setDisplayedMessages(prev => [...prev, nextMessage]);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [chat, displayedMessages]);

 
  useEffect(() => {
    if (typing || (displayedMessages.length > 0 && displayedMessages[displayedMessages.length - 1].sent_by === 'bot')) {
      
      const scrollOptions = {
        behavior: 'smooth',
        block: 'nearest'
      };
      bottomRef.current?.scrollIntoView(scrollOptions);
    }
  }, [displayedMessages, typing]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const toggleLike = (id) => {
    setLikes(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="w-full py-4 flex-1 overflow-y-auto p-4 bg-white transition-all duration-300">
      {displayedMessages.map((msg) => (
        <div
          key={msg.id}
          className={`mb-4 w-full flex ${msg.sent_by === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`relative group max-w-xs md:max-w-md lg:max-w-xl p-4 rounded-2xl shadow-lg transition-all duration-200 
              ${msg.sent_by === 'user'
                ? 'bg-gradient-to-t from-slate-200 to-slate-400 text-black'
                : 'bg-gray-100 text-black text-start'}`}
          >
            <div className="whitespace-pre-wrap">{msg.message_content}</div>
            <div className="text-xs mt-1 opacity-70 text-right">
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>

            {msg.sent_by === 'bot' && (
              <div className="absolute -top-4 right-2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaRegCopy
                  className="cursor-pointer text-gray-500 hover:text-black"
                  onClick={() => handleCopy(msg.message_content)}
                  title="Copy"
                />
                {likes[msg.id] ? (
                  <FaThumbsUp
                    className="cursor-pointer text-blue-500"
                    onClick={() => toggleLike(msg.id)}
                    title="Unlike"
                  />
                ) : (
                  <FaRegThumbsUp
                    className="cursor-pointer text-gray-500 hover:text-blue-500"
                    onClick={() => toggleLike(msg.id)}
                    title="Like"
                  />
                )}
                <FaSyncAlt
                  className="cursor-pointer text-gray-500 hover:text-green-600"
                  onClick={() => onRegenerate?.(msg)}
                  title="Regenerate"
                />
              </div>
            )}
          </div>
        </div>
      ))}

      {typing && (
        <div className="flex justify-start mb-4">
          <div className="max-w-xs md:max-w-md lg:max-w-xl p-4 rounded-2xl bg-gray-100 shadow-lg">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        </div>
      )}

      <div ref={bottomRef} />

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default ChatBox;