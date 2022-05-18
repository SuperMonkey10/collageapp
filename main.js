var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak()
{
    var synth= window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds"
    var utterthis= new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    },5000)
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera")

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML="<img id='image' src="+data_uri+">"

    })
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result2").innerHTML="<img id='image' src="+data_uri+">"

    })
}
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result3").innerHTML="<img id='image' src="+data_uri+">"

    })
}

function save(){
    link= document.getElementById("link");
    image= document.getElementById("image").src;
    link.href=image;
    link.click()
}


