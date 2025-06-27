// redux/Slices/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chat: [],
  selectedChat: null,
  selectedModel: null,
  newChat: true,
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
    clearSelectedChat: (state) => {
      state.selectedChat = null;
    },
    setSelectedModel: (state, action) => {
      state.selectedModel = action.payload;
    },
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    clearChat: (state) => {
      state.chat = [];
    },
  },
});

export const {
  setSelectedChat,
  clearSelectedChat,
  setSelectedModel,
  setChat,
  clearChat,
} = taskSlice.actions;
export default taskSlice.reducer;
