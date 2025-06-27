import React from 'react';

const Heading = ({text}) => {
    return (
        <div className='py-4'>
             <h3 className='text-4xl mt-12 text-[#60A5FA] font-bold text-center'>{text}</h3>
        </div>
    );
};

export default Heading;