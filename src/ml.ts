/* @__PURE__ */
import "@mediapipe/face_detection";
/* @__PURE__ */
import "@tensorflow/tfjs-core";
// Register WebGL backend.
/* @__PURE__ */
import "@tensorflow/tfjs-backend-webgl";
import * as faceDetection from "@tensorflow-models/face-detection";

const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
const detectorConfig: faceDetection.MediaPipeFaceDetectorMediaPipeModelConfig =
  {
    runtime: "mediapipe",
    solutionPath: "/",
  };

const detector = faceDetection.createDetector(model, detectorConfig);

export const getDetector = () => {
  return detector;
};
