function back(){
    window.location="index.html"
}

function setup(){
    canvas= createCanvas(640, 660);
    canvas.center();

    objectDetector= ml5.objectDetector( 'cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
    document.getElementById("objects").innerHTML= "Objects Detected: 1 Total Objects: 1";

}



function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img, gotresult);
}

img="";
status="";

function preload(){
    img= loadImage("hi.jpg");
}

function draw(){
    image(img, 0, 0, 640, 660);
    fill("#FF0000");
    text("Mirror", 25, 60);
    noFill();
    stroke("#FF0000");
    rect(5, 5, 620, 650);
}

function gotresult(error, results){
    if(error){
    console.log(error);
    }
    console.log(results);
    }