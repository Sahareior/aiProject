import React, { useEffect, useState } from 'react';
import { useSendMessageMutation, useAddMessageToChatMutation } from '../../../redux/Slices/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { LiaPaperclipSolid } from "react-icons/lia";
import { clearChat, clearSelectedChat, setChat, setSelectedChat } from '../../../redux/Slices/taskSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const [addMessageToChat] = useAddMessageToChatMutation();
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state?.taskStore?.selectedChat);
  const selectedModel = useSelector((state) => state.taskStore.selectedModel);
  const chat = useSelector((state) => state.taskStore.chat);

  const handleSend = async () => {
    if (!message.trim()) return;

    try {
      let response;

      if (selectedChat?.id) {
        // Existing chat
        response = await addMessageToChat({
          chat_id: selectedChat.id,
          model_name: selectedModel || 'Chartwright',
          message_content: message,
        }).unwrap();
      } else {
        // New chat
        response = await sendMessage({
          model_name: selectedModel || 'Chartwright',
          message_content: message,
        }).unwrap();

        if (response?.data?.id) {
          dispatch(setSelectedChat(response.data)); // Set new chat in Redux
        }
      }

      setMessage('');

      if (response?.data?.messages) {
       dispatch(setChat([...chat, ...response.data.messages]));

        // Optional scroll to bottom
        setTimeout(() => {
          const chatContainer = document.getElementById('chat-container');
          if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }
        }, 100);
      }

    } catch (err) {
      console.error('Send failed:', err);
    }
  };

  useEffect(() => {
  if (selectedChat) {
     dispatch(clearChat());
  
  }
}, [selectedChat?.id])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t p-4">
      <div className="w-full flex justify-between gap-5 mb-6">
        <LiaPaperclipSolid size={30} />
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-[44vw] p-3 border rounded-lg shadow-sm focus:outline-none"
          placeholder="Type your message (Shift + Enter for new line)"
        />
        <FaMicrophoneAlt size={30} />
        <IoSend size={30} onClick={handleSend} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default MessageInput;
