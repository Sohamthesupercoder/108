




   Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });




  camera=document.getElementById("camera");
  Webcam.attach(camera);
  
  console.log("ml5 version: ",ml5.version);
  
  
  function captureImage() {
    Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML="<img id='captured_photo' src='" + data_uri + "'>";
    });
  
  }
  
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VEPY29Nnw/model.json",modelLoaded);
  
  
  function modelLoaded(){
    console.log("modelLoaded");
  }  

  function identifyImage(){
    image =document.getElementById("result");
    classifier.classify(image , gotresult);
  }
  
    function gotresult(error , results) {
      if(error){
        console.log(error)
      }else {
        console.log(results);
        prediction_1 =results[0].label;
        document.getElementById("result_emotion_name").innerHTML=prediction_1;
        
        
      if(prediction_1 == "LOL"){
        document.getElementById("result_emoji_1").innerHTML="&#129304";
      }else if(prediction_1 == "super"){
        document.getElementById("result_emoji_1").innerHTML="&#128076";
      }else{
        document.getElementById("result_emoji_1").innerHTML="&#128077";
      }
     
      }


     speak() 
  
    }

    function speak(){

      var synth = window.speechSynthesis;
      var speakdata = "your first hand gesture prediction is" + prediction_1;
      var audiodata = new SpeechSynthesisUtterance(speakdata);
      
      synth.speak(audiodata);
    }


