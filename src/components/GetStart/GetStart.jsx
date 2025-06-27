import React from 'react';
import Heading from '../shared_components/Headings/Heading';
import { Button } from 'antd';

const GetStart = () => {
    return (
        <div className='bg-[#1E293B] flex justify-center items-center flex-col gap-6 py-14'>
            <Heading text={'Get Started'} />
            <p className='text-white'>Ready to transform your clinical documentation process? Contact our team to learn how Clin Technologies can be tailored to your specific healthcare setting.</p>
            <div className=' w-[50vw] text-slate-300 py-8 flex justify-center items-center border-2 border-white text-center'>
                <h6>Or reach us directly via email at support@clintechso.com</h6>
            </div>

                    <div className='flex justify-center gap-4 items-center mt-6'>
                <Button type='dashed' className='t'>
                    Login
                </Button>
                <Button type='primary' className='bg-blue-600 hover:bg-blue-700'>
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default GetStart;