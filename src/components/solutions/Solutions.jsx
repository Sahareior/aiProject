import React from 'react';
import { RobotOutlined } from '@ant-design/icons';

const solutionItems = [
  {
    title: 'Validity',
    color: 'border-yellow-400',
    description: 'Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.',
  },
  {
    title: 'Redactify',
    color: 'border-teal-400',
    description: 'Redactify uses AI to intelligently redact sensitive patient information, ensuring HIPAA compliance and secure data sharing across platforms.',
  },
  {
    title: 'TranscriptX',
    color: 'border-pink-400',
    description: 'TranscriptX delivers real-time transcription of clinical conversations with exceptional accuracy, freeing up providers to focus on patient care.',
  },
  {
    title: 'Chartwright',
    color: 'border-green-400',
    description: 'Chartwright generates complete, structured clinical notes by interpreting provider-patient dialogue and integrates seamlessly with EMRs.',
  },
];

const Solutions = () => {
  return (
    <section className="bg-[#0F172A] py-12 flex flex-col items-center gap-6 text-center">
      <h2 className="text-[#60A5FA] font-bold text-4xl">Our Solutions</h2>
      <p className="text-white max-w-3xl">
        Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 md:px-20">
        {solutionItems.map((item, index) => (
          <div
            key={index}
            className={`bg-[#132247] p-6 flex flex-col gap-4 ${item.color} border-t-2 rounded-md`}
          >
            <RobotOutlined style={{ fontSize: 32, color: '#60A5FA' }} />
            <h3 className="text-[#60A5FA] text-start mt-2 text-xl font-bold">{item.title}</h3>
            <p className="text-white text-start text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
