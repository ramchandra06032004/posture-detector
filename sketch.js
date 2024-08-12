let face;
let capture;
let poseNet;
let singlePose;
let singleSkeleton

function setup() {
  face=loadImage("face.png")
  createCanvas(1000, 600);
  capture = createCapture(VIDEO);
  capture.size(1000, 600);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelLoaded);
  poseNet.on("pose", recivePose);
}

function recivePose(pose) {
  if (pose.length > 0) {
    singlePose = pose[0].pose;
    singleSkeleton=pose[0].skeleton
    console.log(pose);
    
  }
}

function modelLoaded() {
  console.log("Model loaded");
}
function getRandomeArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function draw() {
  image(capture, 0, 0, 1000, 600);
  fill(255, 0, 0);
  if (singlePose) {
  for (i = 0; i < singlePose.keypoints.length; i++) {
    
    ellipse(
      singlePose.keypoints[i].position.x,
      singlePose.keypoints[i].position.y,
      13,
      13
    );
  }
}
stroke(255, 0, 0);
strokeWeight(3);
if (singleSkeleton) {
  for (let i = 0; i < singleSkeleton.length; i++){
    line(singleSkeleton[i][0].position.x,
      singleSkeleton[i][0].position.y,
      singleSkeleton[i][1].position.x,
      singleSkeleton[i][1].position.y)
  }
}
}
