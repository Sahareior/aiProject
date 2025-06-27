import React, { useState } from 'react';
import { useGetMessagesQuery } from '../../../../redux/Slices/apiSlice';
import { format } from 'date-fns';
import { Skeleton, List, Avatar, Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setSelectedChat } from '../../../../redux/Slices/taskSlice';

const { Text } = Typography;

const History = () => {
      const dispatch = useDispatch();
  const { data: chats, error, isLoading } = useGetMessagesQuery();
  const [selectedChatId, setSelectedChatId] = useState(null);

 console.log('chats', chats?.data)
  const generateChatTitle = (messages) => {
    if (!messages || messages.length === 0) return "Empty Chat";
    
    const firstUserMessage = messages.find(msg => msg.sent_by === 'user' && msg.message_content.trim());
    const firstBotMessage = messages.find(msg => msg.sent_by === 'bot' && msg.message_content.trim());
    
    if (firstUserMessage?.message_content) {
      return firstUserMessage.message_content.length > 30 
        ? `${firstUserMessage.message_content.substring(0, 30)}...` 
        : firstUserMessage.message_content;
    }
    
    if (firstBotMessage?.message_content) {
      return `AI: ${firstBotMessage.message_content.substring(0, 30)}...`;
    }
    
    return "Untitled Chat";
  };

  const handleChatSelect = (chat) => {
    console.log('ca',chat)
    setSelectedChatId(chat.id);
     dispatch(setSelectedChat(chat));
  };

  if (isLoading) {
    return (
      <div className="p-4">
        <Skeleton active paragraph={{ rows: 6 }} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading chat history: {error.message}
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-4 border-b">
        <Text strong className="text-lg">Chat History</Text>
      </div>
      
      <List
        itemLayout="horizontal"
        dataSource={chats?.data || []}
        renderItem={(chat) => (
          <List.Item
            onClick={() => handleChatSelect(chat)}
            className={`cursor-pointer hover:bg-gray-50 ${selectedChatId === chat.id ? 'bg-blue-50' : ''}`}
          >
            <List.Item.Meta
              avatar={<Avatar icon={<MessageOutlined />} />}
              title={
                <Text ellipsis className="font-medium">
                  {chat.title === "Untitled Chat" ? generateChatTitle(chat.messages) : chat.title}
                </Text>
              }
              description={
                <div className="flex justify-between">
                  <Text type="secondary" ellipsis>
                    {chat.messages.length > 0 
                      ? chat.messages[chat.messages.length - 1].message_content.substring(0, 40) + 
                        (chat.messages[chat.messages.length - 1].message_content.length > 40 ? '...' : '')
                      : 'Empty chat'}
                  </Text>
                  <Text type="secondary">
                    {format(new Date(chat.timestamp), 'MMM d')}
                  </Text>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default History;