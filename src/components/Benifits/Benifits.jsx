import React from 'react';
import Heading from '../shared_components/Headings/Heading';
import { Button } from 'antd';

const Benifits = () => {
    return (
        <div className='bg-[#1E293B] py-10 px-4 md:px-52'>
            <Heading text={'Benefits'} />

            <div className='py-6 text-white'>
                <p className='mb-4'>Healthcare providers using Clin Technologies solutions report:</p>
                <ul className='list-disc pl-6 space-y-3'>
                    <li className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>Reduction in documentation time by 40-60%</span>
                    </li>
                    <li className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>Improved work-life balance with less after-hours charting</span>
                    </li>
                    <li className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>Enhanced patient interaction due to less focus on note-taking</span>
                    </li>
                    <li className='flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>More comprehensive and consistent clinical documentation</span>
                    </li>
                </ul>
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

export default React.memo(Benifits);