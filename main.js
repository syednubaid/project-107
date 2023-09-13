function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/SaEM3vKLF/./my_model/.json',modelready)

}
  
function modelready(){
    classifier.clasify(gotresult);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
    }

}
