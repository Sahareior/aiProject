import React from 'react';
import { Button, Input, Card, Typography } from 'antd';

const { Title } = Typography;

const ManageSubs = () => {
  return (
    <div className="min-h-screen bg-[#1E293B] flex flex-col items-center justify-center px-4">
      <Title level={2} className="!text-white mb-6">
        Manage Subscription
      </Title>

      <Card
        className="w-full max-w-md p-6 border border-blue-500 rounded-md bg-[#334155]"
        bordered={false}
      >
        <div className="space-y-4">
          <Input
            defaultValue="individual"
            className="bg-[#475569] text-white border-none placeholder-white"
        
          />
          <Input
            defaultValue="July 02, 2025 23:46:28"
            className="bg-[#475569] text-white border-none placeholder-white"
          
          />

          <div className="flex gap-4 pt-4">
            <Button
              type="primary"
              className="bg-green-600 hover:bg-green-700 text-white w-full font-semibold"
            >
              Upgrade Subscription
            </Button>
            <Button
              danger
              className="bg-red-600 hover:bg-red-700 text-white w-full font-semibold"
            >
              Cancel Subscription
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ManageSubs;
