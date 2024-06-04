import React from "react";

const StartAssessmentModal = ({ closeModal }) => {
  return (
    <div className="w-full h-screen fixed flex justify-center items-center bg-black bg-opacity-40 z-50 transition-opacity ease-in-out duration-500">
      <div
        className="w-full h-full inset-0 z-0 absolute"
        onClick={() => {
          closeModal(false);
        }}
      />
      <div className="max-w-xs md:max-w-lg z-40">
        <div className="flex justify-between items-center bg-primary-50 p-4 rounded-tl-2xl rounded-tr-2xl">
          <h4 className="text-base font-medium text-white">Start assessment</h4>
          <button
            className="bg-primary-100 bg-opacity-20 rounded-lg py-2 px-4 text-white text-xs"
            onClick={() => closeModal(false)}
          >
            Close
          </button>
        </div>
        <div className="bg-primary-100 flex flex-col justify-center items-center space-y-2 py-6 px-8 md:px-24">
          <h3 className="text-primary-50 text-lg md:text-xl font-medium">
            Proceed to start assessment
          </h3>
          <p className="text-center text-sm">
            Kindly keep to the rules of the assessment and sit up, stay in front
            of your camera/webcam and start your assessment.
          </p>
        </div>
        <div className="flex justify-end items-center bg-white p-4 rounded-bl-2xl rounded-br-2xl">
          <button
            className="bg-primary-50 rounded-lg py-2.5 px-6 text-white text-base"
            onClick={() => closeModal(false)}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartAssessmentModal;
