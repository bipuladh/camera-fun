import "@mediapipe/face_detection";
import "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import * as faceDetection from "@tensorflow-models/face-detection";

const path = () => (window.origin.includes("github") ? "/js-camera-ml/" : "/");

const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
const detectorConfig: faceDetection.MediaPipeFaceDetectorMediaPipeModelConfig =
  {
    runtime: "mediapipe",
    solutionPath: path(),
  };

const detector = faceDetection.createDetector(model, detectorConfig);

export const getDetector = () => {
  return detector;
};
