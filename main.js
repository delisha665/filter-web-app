function preload() {

}
function setup() {
    canvas=createCanvas(300,300)
    canvas.position(600,100);
    Video=createCapture(VIDEO);
    Video.hide();
    Video.size(300,300);
    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotResults);
}
function draw() {
    
image(Video,0,0,400,400);
}
function modelLoaded() {
    console.log("Success");
}
function gotResults(results) {
    console.log(results);
    if (results.length>1) {

        nose_x_position=results[0].pose.nose.x;
        nose_y_position=results[0].pose.nose.y;
        Left_eye_x_position=results[0].pose.leftEye.x;
        Left_eye_y_position=results[0].pose.leftEye.y;
        right_eye_x_position=results[0].pose.rightEye.x;
        right_eye_y_position=results[0].pose.rightEye.y;
        console.log(nose_x_position);
        console.log(nose_y_position);
        console.log(Left_Eye_y_position);
        console.log(Left_Eye_x_position);
        console.log(right_eye_y_position);
        console.log(right_eye_x_position);




    }        
    }
    