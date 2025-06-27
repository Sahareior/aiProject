import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { RobotOutlined, MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const items = [
  { key: 'about', label: 'About' },
  { key: 'solutions', label: 'Our Solutions' },
  { key: 'action', label: 'In Action' },
  { key: 'technology', label: 'Technology' },
  { key: 'benefits', label: 'Benefits' },
  { key: 'caseuse', label: 'Case Use' },
];

const Navbar = () => {
  const [current, setCurrent] = useState('about');
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
    setOpen(false); // close drawer on selection
  };

  return (
    <div className="w-full z-20 bg-[#0B1120] px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center text-white font-semibold text-lg">
        <RobotOutlined className="text-2xl mr-2" />
        Clin
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          theme="dark"
          className="bg-transparent navbar-menu text-white border-b-0"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <Button
          type="text"
          icon={<MenuOutlined className="text-white text-xl" />}
          onClick={() => setOpen(true)}
        />
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        closable={true}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="vertical"
          items={items}
        />
      </Drawer>
    </div>
  );
};

export default Navbar;
