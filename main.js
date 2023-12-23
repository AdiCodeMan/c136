status="";
video = "";

function setup()
{
    canvas = createCanvas(480, 350);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDectector = ml5.objectDectetor('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded")
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 350);
}