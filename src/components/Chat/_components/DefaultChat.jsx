import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useGetChatByIdQuery } from '../../../redux/Slices/apiSlice';

import MessageInput from './MessageInput';
import ChatBox from './ChatBox';
import { setSelectedModel } from '../../../redux/Slices/taskSlice';

const DefaultChat = () => {
  const [chat, setChat] = useState([]);
  const dispatch = useDispatch();

  const selectedData = useSelector((state) => state?.taskStore?.selectedChat);
  const selectedModel = useSelector((state) => state?.taskStore?.selectedModel);

  const { data } = useGetChatByIdQuery(selectedData?.id);

  useEffect(() => {
    if (data?.data?.messages) {
      setChat(data.data.messages);
    }
  }, [data]);

  const models = ['Chartwright', 'TranscriptX', 'Redactify', 'Validify'];

  useEffect(() => {
  if (!selectedModel) {
    dispatch(setSelectedModel(models[0]));
  }
}, [dispatch, selectedModel]);


  const handleModelSelect = (model) => {
    dispatch(setSelectedModel(model));
  };

  return (
    <div className="flex h-[90vh]">
      <div className="flex flex-col justify-between h-full w-full items-center text-center px-4">

        {/* Top Buttons */}
        <div className="space-x-4 mt-4">
          {models.map((model) => (
            <Button
              key={model}
              type={selectedModel === model ? 'primary' : 'default'}
              onClick={() => handleModelSelect(model)}
            >
              {model}
            </Button>
          ))}
        </div>

        {/* Middle Chat */}
        <div className="flex-1 w-full overflow-y-auto my-4">
          {chat.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-blue-600">Hello,</h1>
              <p className="text-xl text-gray-500">How Can I Help You Today</p>
            </div>
          ) : (
            <div className="m2">
              <ChatBox chat={chat} />
            </div>
          )}
        </div>

        {/* Bottom Input */}
        <div className="w-full pb-4">
          <MessageInput setChat={setChat} />
        </div>
      </div>
    </div>
  );
};

export default DefaultChat;
