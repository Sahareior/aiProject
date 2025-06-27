import React, { useEffect, useState } from 'react';
import { useSendMessageMutation, useAddMessageToChatMutation } from '../../../redux/Slices/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { LiaPaperclipSolid } from "react-icons/lia";
import { setSelectedChat } from '../../../redux/Slices/taskSlice'; // 💡 import your Redux action

const MessageInput = ({ setChat }) => {
  const [message, setMessage] = useState('');
  const [sendMessage] = useSendMessageMutation();
  const [addMessageToChat] = useAddMessageToChatMutation();
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state?.taskStore?.selectedChat);

 const selectedModel = useSelector((state) => state.taskStore.selectedModel);

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
      }

      setMessage('');

      if (response?.data?.messages) {
        setChat((prev) => [...prev, ...response.data.messages]);
      }

    } catch (err) {
      console.error('Send failed:', err);
    }
  };

//   ❌ Avoid clearing chat unnecessarily
  useEffect(() => {
    if (selectedChat) {
      setChat('');
    }
  }, [selectedChat?.id]);

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
