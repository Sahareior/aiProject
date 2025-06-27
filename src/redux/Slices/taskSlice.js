import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chat: [],
  selectedChat: null,
  selectedModel: null, // ✅ Clean fix here
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
  },
});

export const { setSelectedChat, clearSelectedChat, setSelectedModel } = taskSlice.actions;
export default taskSlice.reducer;
