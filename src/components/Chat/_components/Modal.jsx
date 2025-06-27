import React from 'react';
import { Modal, Button } from 'antd';

const CustomModal = ({ isModalOpen, onClose }) => {
  return (
    <Modal
      title="Choose Your Plan"
      open={isModalOpen}
      onCancel={onClose}
      footer={null}
      width={800} // Increased modal width
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Plan 1 */}
        <div className="border rounded-xl shadow p-6 bg-white text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Standard Plan</h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">$65</p>
          <ul className="text-gray-600 mb-6 space-y-2 text-sm">
            <li>✅ 100 chats/month</li>
            <li>✅ Email support</li>
            <li>✅ Access to basic features</li>
          </ul>
          <Button type="primary" className="w-full">Choose Plan</Button>
        </div>

        {/* Plan 2 */}
        <div className="border rounded-xl shadow p-6 bg-white text-center">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">Pro Plan</h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">$100</p>
          <ul className="text-gray-600 mb-6 space-y-2 text-sm">
            <li>✅ Unlimited chats</li>
            <li>✅ Priority support</li>
            <li>✅ All features unlocked Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates cum hic blanditiis omnis sed quaerat totam fugit eaque mollitia porro cumque, quo voluptatum expedita laborum quasi illo sit! Necessitatibus.</li>
          </ul>
          <Button type="primary" className="w-full" danger>Choose Plan</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
