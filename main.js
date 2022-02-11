Webcam.set({
    width:420,height:290,
    image_format:'png',
    png_quality:90
});

cam=document.getElementById("webcam");

Webcam.attach(cam);

function takephoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'"/>';
    }
    );
}

console.log("ml5 version: ",ml5.version)
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7KGksUn8h/model.json',modelLoaded);

function modelLoaded(){
    console.log('My Model has Loaded');
}

function checkimg(){
    i1=document.getElementById("myimg");
    mymodel.classify(i1,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("obj").innerHTML=results[0].label;
        document.getElementById("Acc").innerHTML=results[0].confidence.toFixed(2);
    }
}