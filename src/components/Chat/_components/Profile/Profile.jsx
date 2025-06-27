import React, { useState } from 'react';
import { Form, Input, Button, Avatar, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [form] = Form.useForm();

  const initialValues = {
    name: 'John Doe',
    plan: 'Free Plan',
  };

  const onFinish = (values) => {
    console.log('Saved values:', values);
    setEditMode(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setEditMode(false);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
    }

    return isImage && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'done' || info.file.status === 'uploading') {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  return (
    <div className='flex gap-8 justify-center items-start mt-10'>
      <div className='flex flex-col items-center'>
        <Avatar
          size={120}
          src={imageUrl}
          className='border shadow'
        />
        {editMode && (
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            <Button className='mt-2' icon={<UploadOutlined />}>
              Edit Photo
            </Button>
          </Upload>
        )}
      </div>

      <Form
        form={form}
        initialValues={initialValues}
        onFinish={onFinish}
        layout='vertical'
        className='w-[60vw]'
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input disabled={!editMode} />
        </Form.Item>

        <Form.Item label='Plan'>
          <Input disabled value="Free Plan" />
        </Form.Item>

        <div className='flex gap-4 mt-4'>
          {editMode ? (
            <>
              <Button type='primary' htmlType='submit'>
                Done
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </>
          ) : (
            <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default Profile;
