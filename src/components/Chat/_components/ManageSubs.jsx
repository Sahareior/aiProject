import React from 'react';
import { Button, Input, Card, Typography } from 'antd';

const { Title } = Typography;

const ManageSubs = () => {
  return (
    <div className="min-h-screen  px-4">
      <Title level={2} className="!text-white mb-6">
        Manage Subscription
      </Title>

      <Card
        className="w-[50vw] p-6 border border-blue-500 rounded-md "
        bordered={false}
      >
        <div className="space-y-8">
          <Input
            defaultValue="individual"
            className="bg-[#475569] text-white border-none p-3 placeholder-white"
        
          />
          <Input
            defaultValue="July 02, 2025 23:46:28"
            className="bg-[#475569] text-white border-none p-3 placeholder-white"
          
          />

          <div className="flex gap-4 pt-4">
            <Button
              type="primary"
              className="bg-green-600 hover:bg-green-700 p-6 text-white w-full font-semibold"
            >
              Upgrade Subscription
            </Button>
            <Button
              
              className="bg-red-600 p-6 text-white w-full font-semibold"
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
