var img="";
status=""
var object=[];
function preload(){
    img=loadImage("bookcase.jpg");
}
function setup(){
   canvas= createCanvas(640,420);
   canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelReady);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i < object.length;i++){
    
       
    percent=floor(100*object[i].confidence);
    
     stroke("red");
     fill("red"); 
     text(object[i].label + " "+percent+"%",object[i].x,object[i].y);
     noFill();
     rect(object[i].x,object[i].y,object[i].width,object[i].height);
     
    }
    document.getElementById("status").innerHTML="Status: Objects Detected";
    }
}
function modelReady(){
    status="true";
    console.log("Model Loaded");
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
    
}