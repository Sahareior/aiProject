import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BulbOutlined,
  UserOutlined,
  ThunderboltOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Switch, Avatar } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import History from './_components/History/History';
import CustomModal from './_components/Modal';
import { useLogoutMutation } from '../../redux/Slices/apiSlice';
import { LiaLightbulb } from 'react-icons/lia';

const { Header, Sider, Content } = Layout;

const ChatBody = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();
  const location = useLocation();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('accessToken');
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', checked);
  };

  const showModal = () => setIsModalOpen(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
<Sider
  trigger={null}
  collapsible
  collapsed={collapsed}
  onCollapse={(val) => setCollapsed(val)}
  theme={theme}
  width={244} // 96 * 4 = 384px
  className="shadow-md"
>
<div className='flex p-4 justify-between'>
 <Link to='/'>   <img src="https://super-liger-e3b5ad.netlify.app/assets/Group%201597882096-B43QmyDV.png" alt="Logo" className="h-16" />
</Link>
           <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined size='large' /> : <MenuFoldOutlined size='large' />}
      onClick={() => setCollapsed(!collapsed)}
    />
</div>
        <div className="flex justify-center flex-col gap-7 items-center p-4">
          {!collapsed && (
            <Link to="/chat" className="ml-2 bg-blue-400 p-2 text-white text-lg font-semibold">
              New Chat
            </Link>
          )}
        </div>

        <Menu
          theme={theme}
          className='text-[16px] mt-5'
          mode="inline"
          defaultSelectedKeys={['/chat']}
          onClick={({ key }) => navigate(key)}
          items={[
 
{
  key: 'theme-toggle',
  icon: <LiaLightbulb />,
  label: (
    <div
      className="flex gap-9 items-center w-full"
      onClick={(e) => e.stopPropagation()} // prevent triggering navigation
    >
      <span className='text-[16px]'>Dark Mode</span>
      <Switch
        onChange={toggleTheme}
        checked={theme === 'dark'}
        size="small"
      />
    </div>
  ),
}
,
            {
              key: '/chat/subs',
              icon: <ThunderboltOutlined />,
              label: 'Manage Subscription',
            },
            {
              key: '/chat/users',
              icon: <UserOutlined />,
              label: 'Users',
            },
            {
              key: '/chat/support',
              icon: <QuestionCircleOutlined />,
              label: 'Help & Support',
            },
            {
              key: '/chat/faq',
              icon: <QuestionCircleOutlined />,
              label: 'FAQ',
            },
          ]}
        />

        <div className="absolute bottom-4 text-xl w-full px-4">
          <Button
            type="text"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            className="text-red-500 w-full text-left"
          >
            Logout
          </Button>
        </div>
      </Sider>

      {/* Main Chat Area */}
      <Layout className="flex-1 bg-white dark:bg-[#1f1f1f]">
        <Header className="bg-[#F9FAFC] px-4 flex  justify-betwee shadow">
  
          <div className="flex gap-7 w-full items-center justify-between space-x-4">
            <div className="flex gap-3 items-center space-x-2">
              <Link to='/chat/profile'><Avatar size="large" icon={<UserOutlined />} /></Link>
              <div>
                <h3 className="text-yellow-800 text-xl font-medium">Guest</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Welcome Back</p>
              </div>
            </div>
          <Button onClick={showModal} type='primary'>Get Plans</Button>
          </div>
        </Header>

        <Content className="p-6 bg-white ">
          <Outlet />
        </Content>
      </Layout>

      {/* History Section (only on /chat) */}
      {location.pathname === '/chat' && (
        <div className="w-[20%]">
          <History />
        </div>
      )}

      {/* Plans Modal */}
      <CustomModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ChatBody;
