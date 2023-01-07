nosex=0;
nosey=0;
differences=0;
leftWristX=0;
rightWristX=0;
function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(570,150);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
background("#6A5ACD");
fill("green");
textSize(differences);
text("Rithvik",50,200);
square(nosex,nosey,differences);
}
function modelLoaded(){
console.log("posenet is initialized");
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
differences=floor(leftWristX-rightWristX);
console.log("leftWrist X="+leftWristX+"rightWrist X="+rightWristX+"differences="+differences);
}
}