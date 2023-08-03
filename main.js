leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
difference  = 0;
color = "";
function setup () {
    canvas = createCanvas(335, 335);
    canvas.position(595, 310);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(30, 285);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
var input = "";
function nextPage () {
    input = document.getElementById("input").value;
    if (input == "") {
        input = "Nothing";
    }
    console.log(input);
    document.getElementById("input").innerHTML = "";
}
function modelLoaded () {
    console.log("PoseNet is initialized");
}
function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X - " + noseX + ", Nose Y - " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X - " + leftWristX + ", Right Wrist X - " + rightWristX);
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Difference - " + difference);
    }
}
function redChosen () {
    color = "red";
}
function orangeChosen () {
    color = "orange";
}
function yellowChosen () {
    color = "yellow";
}
function greenChosen () {
    color = "green";
}
function blueChosen () {
    color = "blue";
}
function cyanChosen () {
    color = "cyan";
}
function purpleChosen () {
    color = "purple";
}
function whiteChosen () {
    color = "white";
}
function blackChosen () {
    color = "black";
}
function draw () {
    background("#7b95a8");
    textSize(difference);
    text(input, noseX, noseY);
    document.getElementById("text_size").innerHTML = "The size of the text is " + difference + " pixels";
    if (color == "red") {
        fill("red");
    }
    else if (color == "orange") {
        fill("orange");
    }
    else if (color == "yellow") {
        fill("yellow");
    }
    else if (color == "green") {
        fill("green");
    }
    else if (color == "blue") {
        fill("blue");
    }
    else if (color == "cyan") {
        fill("cyan");
    }
    else if (color == "purple") {
        fill("purple");
    }
    else if (color == "white") {
        fill("white");
    }
    else if (color == "black") {
        fill("black");
    }
}