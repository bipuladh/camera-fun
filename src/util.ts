import { Face } from "@tensorflow-models/face-detection";

function drawPath(ctx, points, closePath) {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.stroke(region);
}

const GREEN = "#32EEDB";
const RED = "#FF2C35";
const BLUE = "#157AB3";
const NUM_KEYPOINTS = 6;

export function drawResults(
  ctx: CanvasRenderingContext2D,
  faces: Face[],
  boundingBox: boolean,
  showKeypoints: boolean
) {
  faces.forEach((face) => {
    const keypoints = face.keypoints.map((keypoint) => [
      keypoint.x,
      keypoint.y,
    ]);

    if (boundingBox) {
      ctx.strokeStyle = RED;
      ctx.lineWidth = 1;

      const box = face.box;
      drawPath(
        ctx,
        [
          [box.xMin, box.yMin],
          [box.xMax, box.yMin],
          [box.xMax, box.yMax],
          [box.xMin, box.yMax],
        ],
        true
      );
    }

    if (showKeypoints) {
      ctx.fillStyle = GREEN;

      for (let i = 0; i < NUM_KEYPOINTS; i++) {
        const x = keypoints[i][0];
        const y = keypoints[i][1];

        ctx.beginPath();
        ctx.arc(x, y, 3 /* radius */, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  });
}
