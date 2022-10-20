function takesnap(){
    save("clownfilterslays.png");
}

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    PoseNet = ml5.poseNet(video, modelloaded);
    PoseNet.on("pose", gotposes);
}

function modelloaded(){
    console.log("PoseNet is loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
}