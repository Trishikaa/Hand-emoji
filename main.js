Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Wemcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='img id="captured_image" src="'+data_uri+'"/>"';   
    });
}

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier()

console.log('ml5 version:',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JpJs3V02J/model,json' ,modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+prediction_1;
    speak_data_2="The second prediction is"+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis)
}


function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
   if(error){
    console.log(error);
} else
    {
        console.error(error);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[0].label;
        prediction_1=results[0].label
        prediction_2=results[1].label
        speak();
    }
        if(results[0].label=="thumbs up")
        {
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        if(results[0].label=="thumbs down")
        {
            document.getElementById("update_emoji").innerHTML="&#128078;";
    }
    if(results[0].label=="punch")
        {
            document.getElementById("update_emoji").innerHTML="&#128074;";
    }
    if(results[0].label=="wave")
        {
            document.getElementById("update_emoji").innerHTML="&#128075;";
        }
        if(results[0].label=="clap")
        {
            document.getElementById("update_emoji").innerHTML="&#128079;";
        }
        if(results[0].label=="peace")
        {
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
    }