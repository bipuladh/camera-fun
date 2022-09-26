const setMediaStream = async (video: HTMLVideoElement) => {
  let stream: MediaStream;
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { height: 640, width: 640 },
      audio: false,
    });
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (e) {
    console.error("Cannot get media", e);
    throw e;
  }
};

const getDomReferences = (): [
  HTMLVideoElement,
  CanvasRenderingContext2D,
  CanvasRenderingContext2D
] => {
  const video = document.getElementById("camera") as HTMLVideoElement;
  const c1 = document.getElementById("c1") as HTMLCanvasElement;
  const c1Cxt = c1.getContext("2d") as CanvasRenderingContext2D;
  const c2 = document.getElementById("c2") as HTMLCanvasElement;
  const c2Cxt = c2.getContext("2d") as CanvasRenderingContext2D;
  if (!video || !c1Cxt || !c2Cxt) {
    throw Error("Elements couldn't be resolved. Something wrong in the DOM");
  }
  return [video, c1Cxt, c2Cxt];
};

const registerListener = (
  video: HTMLVideoElement,
  listenerCallback: EventListener
) => {
  video.addEventListener("play", listenerCallback);
};

const processData = (
  video: HTMLVideoElement,
  width: number,
  height: number,
  hiddenCanvas: CanvasRenderingContext2D,
  visibleCanvas: CanvasRenderingContext2D,
  processor?: (data: Uint8ClampedArray) => Uint8ClampedArray
) => {
  if (!video) {
    return;
  }
  hiddenCanvas.drawImage(video, 0, 0, width, height);
  const imageData: ImageData = hiddenCanvas.getImageData(0, 0, width, height);
  let data = imageData.data;

  if (processor) {
    data = processor(data);
  }
  visibleCanvas.putImageData(imageData, 0, 0);

  setTimeout(
    () =>
      processData(video, width, height, hiddenCanvas, visibleCanvas, processor),
    0
  );
};

document.addEventListener("DOMContentLoaded", async () => {
  const [video, hiddenCanvasCxt, visibleCanvasCxt] = getDomReferences();
  await setMediaStream(video);
  registerListener(video, () => {
    const height = video.videoHeight;
    const width = video.videoWidth;
    processData(video, width, height, hiddenCanvasCxt, visibleCanvasCxt);
  });
});