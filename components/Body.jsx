import Image from "next/image";
import React from "react";
import ObjectDetection from "./ObjectDetection";
import { systemInfo } from "@/system-info";

const Body = () => {
  return (
    <div className="bg-[#F8F9FB] pt-6 pb-12 min-h-[672px]">
      <div className="bg-white max-w-4xl flex flex-col py-10 px-16 mx-auto rounded-[20px]">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-medium">System check</h2>
          <p className="text-sm leading-[22px]">
            We utilize your camera image to ensure fairness for all
            participants, and we also employ both your camera and microphone for
            a video questions where you will be prompted to record a response
            using your camera or webcam, so it&#39;s essential to verify that
            your camera and microphone are functioning correctly and that you
            have a stable internet connection. To do this, please position
            yourself in front of your camera, ensuring that your entire face is
            clearly visible on the screen. This includes your forehead, eyes,
            ears, nose, and lips. You can initiate a 5-second recording of
            yourself by clicking the button below.
          </p>
        </div>
        <div className="flex items-start space-x-4 py-5">
          <ObjectDetection />
          <div className="grid grid-cols-2 gap-4">
            {systemInfo.map((item) =>
              item.id === 1 || item.id === 3 ? (
                <div
                  key={item.id}
                  className="bg-primary-100 relative flex flex-col justify-center items-center rounded-[10px]"
                >
                  <div className="flex flex-col justify-center items-center py-4 px-10 space-y-1.5">
                    <div className="border-[3px] bg-primary-75 border-primary-50 rounded-full p-1">
                      <div className="bg-primary-50 rounded-full p-2">
                        <Image
                          priority
                          src={item.mainIcon}
                          alt="Check mark"
                          width={35}
                          height={35}
                          className="w-7"
                        />
                      </div>
                    </div>
                    <p className="text-xs">{item.title}</p>
                  </div>
                  <div className="absolute rounded-full p-1 bg-primary-50 top-1 right-1">
                    <Image
                      priority
                      src={item.subIcon}
                      alt="sub icon"
                      width={10}
                      height={10}
                      className="w-2.5"
                    />
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="bg-primary-100 relative flex flex-col justify-center items-center rounded-[10px]"
                >
                  <div className="flex flex-col justify-center items-center py-4 px-10 space-y-1.5">
                    <div
                      className={`border-[3px] ${
                        item.id === 2
                          ? "bg-secondary-50 border-r-secondary-50 border-t-secondary-50"
                          : "bg-primary-50 border-r-primary-50 border-t-primary-50"
                      } bg-opacity-10 rotate-45 rounded-full p-2`}
                    >
                      <Image
                        priority
                        src={item.mainIcon}
                        alt="sub icon"
                        width={35}
                        height={35}
                        className="w-7 -rotate-45"
                      />
                    </div>
                    <p className="text-xs">{item.title}</p>
                  </div>
                  <div
                    className={`absolute rounded-full p-1 ${
                      item.id === 2 ? "bg-secondary-50" : "bg-primary-50"
                    } top-1 right-1`}
                  >
                    <Image
                      priority
                      src={item.subIcon}
                      alt="Wifi"
                      width={10}
                      height={10}
                      className="w-2.5"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
