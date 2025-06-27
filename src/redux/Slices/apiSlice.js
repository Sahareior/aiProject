// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://alibackend.duckdns.org',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),

    sendMessage: builder.mutation({
      query: (data) => ({
        url: 'chat/create_chat/',
        method: 'POST',
        body: data,
      }),
    }),

    getMessages: builder.query({
      query: () => 'chat/get_users_chat_list/',
    }),

    getChatById: builder.query({
      query: (id) => `chat/get_a_chat_content/${id}/`,
    }),

    addMessageToChat: builder.mutation({
      query: (data) => ({
        url: 'chat/add_message_to_chat/',
        method: 'POST',
        body: data,
      }),
    }),

    signup: builder.mutation({
      query: (loginData) => ({
        url: '/authentication_app/signup/',
        method: 'POST',
        body: loginData,
      }),
    }),

    signin: builder.mutation({
  query: (loginData) => ({
    url: '/authentication_app/signin/',
    method: 'POST',
    body: loginData,
  }),
}),


    // ✅ Logout endpoint
    logout: builder.mutation({
      query: () => ({
        url: '/authentication_app/logout/',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSendMessageMutation,
  useGetMessagesQuery,
  useAddMessageToChatMutation,
  useGetChatByIdQuery,
  useGetProductsQuery,
   useSigninMutation,
  useLogoutMutation, // ✅ Add this hook to your exports
} = apiSlice;
