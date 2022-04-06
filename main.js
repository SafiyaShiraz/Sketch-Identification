function setup()
{
canvas = createCanvas(280, 280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas); 
synth = window.speechSynthesis;
}

function clearcanvas()
{
background("white")
}

function preload()
{
    classifier= ml5.imageClassifier('DoodleNet');
}

function draw()
{
    strokeWeight(5);
    stroke(0);
    
    if(mousePressed)
    {

line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
classifier.classify(canvas, gotResult);

}

function gotResult(error, result)
{
if(error)
{
console.error(error);
}
else
{
    console.log(result);
 document.getElementById("label").innerHTML = 'Label:'+result[0].label;

document.getElementById("confidence").innerHTML = 'Confidence:'+Math.round(result[0].confidence*100)+'%';
utterThis = new speechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}
}




