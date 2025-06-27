import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; // Changed from "react-router"

import './index.css'
import 'antd/dist/reset.css'; // for Ant Design v5
import App from './App.jsx'
import { store } from './redux/store.js';
import SignUp from './components/Authentication/SignUp.jsx';
import OtpVerification from './components/Authentication/OtpVerification.jsx';
import Chatbody from './components/Chat/ChatBody.jsx';
import DefaultChat from './components/Chat/_components/DefaultChat.jsx';
import ManageSubs from './components/Chat/_components/ManageSubs.jsx';
import { Users } from './components/Chat/_components/Users.jsx';
import { Help } from './components/Chat/_components/Help&Supports.jsx';
import FAQ from './components/Chat/_components/FAQ.jsx';
import SignInComponent from './components/Authentication/Login.jsx';
import Profile from './components/Chat/_components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'signup',
    element: (
      <div className="signup-layout">
        <SignUp />
      </div>
    ),
  },
  {
    path: 'login',
    element: <SignInComponent />
  },
  {
    path: 'verify-otp',
    element: <OtpVerification />
  },
  {
    path: 'chat',
    element: <Chatbody />,
    children:[
      {
        path: '',
        element: <DefaultChat />
      },
      {
        path: 'subs',
        element: <ManageSubs />
      },
     {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'users',
        element: <Users />
      },
      {
        path: 'support',
        element: <Help />
      },
      {
        path: 'faq',
        element: <FAQ />
      },
 
    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)