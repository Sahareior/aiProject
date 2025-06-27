import React from 'react';

const AboutText = () => {
    return (
        <div className='bg-[#1E293B] flex flex-col justify-center items-center py-16'>
            <h3 className='text-4xl text-[#60A5FA] font-bold text-center'>About Clin Technologies</h3>
<div className='w-[75vw] items-center'>
    <p className='text-white'>
        Headquartered in the Midwest, Clin Technologies is a specialized AI firm that empowers healthcare providers across the Midwest and beyond to conquer their most pressing operational challenges. We deliver this through a powerful and flexible AI platform that powers both a suite of ready-to-deploy solutions for documentation and compliance, and the creation of fully bespoke engines for enterprise-level transformation.
    </p>
        <p className='text-white'>
            Our expertise lies in applying cutting-edge Large Language Models (LLMs) and machine learning (ML) to solve real-world challenges in healthcare documentation. We partner closely with individual practitioners, clinics, and healthcare organizations, leveraging meticulously gathered real-world data from professionals to build the exceptionally robust and uniquely effective datasets that power these advanced systems.
        </p>
        <p className='text-white'>
            This same proven AI framework serves as the foundation for our enterprise partnerships. Whether you need an immediate solution from our product suite or a strategic partner to build a custom engine for challenges like Utilization Management, we provide the right tool for the job. Our mission is to transform your data into a proprietary asset, enabling data-driven decisions that eliminate administrative friction and allow you to focus on what matters most.
        </p>
</div>
        </div>
    );
};

export default AboutText;