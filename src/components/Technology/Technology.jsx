import React from 'react';
import Heading from '../shared_components/Headings/Heading';
import { ChromeOutlined } from '@ant-design/icons';

const technologies = [
  {
    title: 'Natural Language Processing',
    description:
      'Our platform Lorem ipsum dolor sit amet. uses advanced NLP to interpret complex clinical language, enabling automatic, context-aware generation of medical notes.',
  },
  {
    title: 'Real-Time Voice Recognition',
    description:
      'Clin Technologies Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa maiores repudiandae mollitia magni ratione similique. Molestias voluptates animi minus quis officiis cum ea! Nulla corrupti dignissimos maxime voluptatibus laudantium veniam atque necessitatibus molestias mollitia laboriosam sunt itaque praesentium maiores aperiam nam, deserunt laborum officiis similique! Nisi molestias dolore doloribus. leverages real-time speech-to-text to transcribe doctor-patient conversations, streamlining clinical documentation.',
  },
  {
    title: 'Medical Data Security',
    description:
      'We implement cutting-edge Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis cupiditate minus aliquid facilis, id odit inventore doloribus maxime cumque dicta laboriosam, consequuntur similique saepe quidem. Quaerat tempora nesciunt suscipit quia magnam nam quasi ipsam odio. Eaque voluptas temporibus distinctio! encryption and compliance protocols to ensure all patient data remains secure and HIPAA-compliant.',
  },
];

const Technology = () => {
  return (
    <div className="bg-[#0F172A] py-12 px-4">
      <Heading text="Our Technology" />
      <p className="text-white max-w-4xl mx-auto text-center mt-4 mb-10">
        At Clin Technologies, we've built our platform on groundbreaking AI designed for healthcare. Our tools combine natural language processing, real-time transcription, and data security to revolutionize medical documentation.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-7xl mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="w-full lg:w-[26%] bg-[#1E293B] p-6 rounded-lg shadow-md flex flex-col gap-4"
          >
            <ChromeOutlined className="text-[#60A5FA] text-3xl" />
            <h3 className="text-[#60A5FA] text-xl font-semibold">
              {tech.title}
            </h3>
            <hr className="border-[#334155]" />
            <p className="text-white text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
