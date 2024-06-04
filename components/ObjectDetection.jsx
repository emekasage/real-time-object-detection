"use client";
import { renderPredictions } from "@/utils/RenderPredictions";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
require("@tensorflow/tfjs");

let catchInterval;

const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  async function runCoco() {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    catchInterval = setInterval(() => {
      runObjectDetection(net);
    }, 100);
  }

  async function runObjectDetection(net) {
    // check if data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // find detected objects
      const detectedObjects = await net.detect(video, undefined, 0.6);

      const context = canvasRef.current.getContext("2d");
      renderPredictions(detectedObjects, context);
    }
  }

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <span className="loading loading-spinner loading-lg text-primary-700" />
        </div>
      ) : (
        <div className="relative border border-primary-50 rounded-[10px]">
          {/* webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-[10px] w-full lg:h-[240px]"
            muted
          />
          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-30 w-full lg:h-[240px]"
          />
        </div>
      )}
    </>
  );
};

export default ObjectDetection;
