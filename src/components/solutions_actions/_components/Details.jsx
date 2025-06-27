import React from 'react';

const Details = () => {
    return (
    <div className="flex h-[600px] bg-[#0A1022] text-white border-t border-gray-700">
      {/* Left Section */}
      <div className="w-1/2 border-r border-gray-700 overflow-y-scroll p-4 space-y-4">
        <h2 className="text-lg font-bold bg-yellow-700 p-2">TranscriptX Note</h2>
        <p>
          Subjective: Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache...
        </p>
        <h3 className="text-white font-semibold mt-4">Objective:</h3>
        <p>
          Gait: Non-antalgic. <br />
          Right Knee Exam: No visible effusion...
        </p>
        <h3 className="text-white font-semibold mt-4">Assessment:</h3>
        <p>
          Medial compartment osteoarthritis (probable).<br />
          Rule out medial meniscus tear (less likely).
        </p>
      </div>

      {/* Right Section */}
      <div className="w-1/2 overflow-y-scroll p-4 space-y-4">
        <h2 className="text-lg font-bold bg-amber-500 p-2">AI-Generated Output</h2>
        <p>
          Patient reports right knee pain ongoing for approximately 3 months, described as a dull ache...
        </p>
        <h3 className="text-white font-semibold mt-4">Objective:</h3>
        <p>
          Gait: Non-antalgic. <br />
          Right Knee Exam: No visible effusion...
        </p>
        <h3 className="text-white font-semibold mt-4">Assessment:</h3>
        <p>
          Medial compartment osteoarthritis, right knee (probable).<br />
          Rule out medial meniscus tear (less likely). Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi error molestiae dignissimos iure commodi a eos aspernatur. Ex sint ipsam obcaecati error quae necessitatibus, tenetur sunt fugiat nostrum minus omnis aperiam, atque nemo aliquam? Velit vel dolores optio beatae culpa recusandae animi. Illum doloribus magni est laudantium, quidem sed sapiente cumque officiis aperiam nemo iste minus iusto eos reprehenderit quis ducimus inventore eaque vel enim tempora distinctio possimus accusamus mollitia sunt. Commodi harum velit eaque odit officia beatae, repudiandae reprehenderit? Aspernatur corrupti sint perferendis error, facere animi consectetur voluptates nam eligendi omnis quam dolorem fuga enim iste dolorum recusandae harum.
        </p>
      </div>
    </div>
    );
};

export default Details;