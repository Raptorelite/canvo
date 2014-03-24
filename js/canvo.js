//Lets create a simple particle system in HTML5 canvas and JS
function canvo() {
    //code
//Initializing the canvas
var canvas = document.createElement('canvas');

canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
var imageObj = new Image();
    imageObj.onload = function() {
    context.drawImage(imageObj,0,0,800,600);
    var myImageData = context.getImageData(0, 0, 800, 600);
    paintCanvas(myImageData);
//    document.body.removeChild(document.getElementById("dino"));
      };
imageObj.src = 'Resources/5.jpg';

function paintCanvas(myImageData)
{
var canvas = document.createElement('canvas');
canvas.id="other";
canvas.width = 640;
canvas.height = 480;
var context = canvas.getContext("2d");
var newData=manipulatePixels(myImageData);
context.putImageData(newData, 0, 0);
document.body.appendChild(canvas);
};

function manipulatePixels(myImageData) {
 var mode="grayscale";
 switch (mode) {
    //case
case "solarize":
 
  for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]>168) {
      myImageData.data[i]=myImageData.data[i];
    }else if (myImageData.data[i]<=168 && myImageData.data[i]>84) {
      myImageData.data[i]=255-myImageData.data[i];
    }else
    {
        myImageData.data[i]=myImageData.data[i];
    }
    
    if (myImageData.data[i+1]>168) {
      myImageData.data[i+1]=myImageData.data[i+1];
    }else if (myImageData.data[i+1]<=168 && myImageData.data[i+1]>84) {
      myImageData.data[i+1]=255-myImageData.data[i+1];
    }else
    {
        myImageData.data[i+1]=myImageData.data[i+1];
    }
    
    if (myImageData.data[i+2]>168) {
      myImageData.data[i+2]=myImageData.data[i+2];
    }else if (myImageData.data[i+2]<=168 && myImageData.data[i+2]>84) {
      myImageData.data[i+2]=255-myImageData.data[i+2];
    }else
    {
        myImageData.data[i+2]=myImageData.data[i+2];
    }
    myImageData.data[i+3]=255;
    }
    return myImageData;
case "brighten":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i]*2;
    myImageData.data[i+1]=myImageData.data[i+1]*2;
    myImageData.data[i+2]=myImageData.data[i+2]*2;
    myImageData.data[i+3]=255;
    }
        return myImageData;
case "darken":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i]/2;
    myImageData.data[i+1]=myImageData.data[i+1]/2;
    myImageData.data[i+2]=myImageData.data[i+2]/2;
    myImageData.data[i+3]=255;
    }
        return myImageData;
case "redify":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i]*2;
    myImageData.data[i+1]=myImageData.data[i+1];
    myImageData.data[i+2]=myImageData.data[i+2];
    myImageData.data[i+3]=255;
    }     
     return myImageData;
 case "bluify":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i];
    myImageData.data[i+1]=myImageData.data[i+1];
    myImageData.data[i+2]=myImageData.data[i+2]*2;
    myImageData.data[i+3]=255;
    }    
    return myImageData;
case "greenify":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i];
    myImageData.data[i+1]=myImageData.data[i+1]*2;
    myImageData.data[i+2]=myImageData.data[i+2];
    myImageData.data[i+3]=255;
    }    
    return myImageData;
case "yellowfy":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i]*2;
    myImageData.data[i+1]=myImageData.data[i+1]*2;
    myImageData.data[i+2]=myImageData.data[i+2];
    myImageData.data[i+3]=255;
    }
        return myImageData;

 case "cyanify":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i];
    myImageData.data[i+1]=myImageData.data[i+1]*2;
    myImageData.data[i+2]=myImageData.data[i+2]*2;
    myImageData.data[i+3]=255;
    }  
      return myImageData;
    
    
   case "magentify":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i]*2;
    myImageData.data[i+1]=myImageData.data[i+1];
    myImageData.data[i+2]=myImageData.data[i+2]*2;
    myImageData.data[i+3]=255;
    }  
        return myImageData;
   
    case "grayscale":
     for (var i=0;i<myImageData.data.length;i+=4)
  {

    myImageData.data[i]=myImageData.data[i];
    myImageData.data[i+1]=myImageData.data[i];
    myImageData.data[i+2]=myImageData.data[i];
    myImageData.data[i+3]=255;
    }  
        return myImageData;
    
   case "highlight":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]>200||myImageData.data[i+1]>200||myImageData.data[i+2]>200) {
      myImageData.data[i]=255;
      myImageData.data[i+1]=255;
      myImageData.data[i+2]=255;
    }
    else
    {
        myImageData.data[i]=0;
        myImageData.data[i+1]=0;
        myImageData.data[i+2]=0;
    }
    
        
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
     case "accentuate":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]<84||myImageData.data[i+1]<84||myImageData.data[i+2]<84) {
      myImageData.data[i]=0;
      myImageData.data[i+1]=0;
      myImageData.data[i+2]=0;
    }
    else
    {
       
    }
    
        
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
    
       case "accentRed":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]<84||myImageData.data[i+1]<84||myImageData.data[i+2]<84) {
      myImageData.data[i]=myImageData.data[i];
      myImageData.data[i+1]=0;
      myImageData.data[i+2]=0;
    }
    else{}
        myImageData.data[i+3]= 255;
    }
        return myImageData; 
    
    case "accentGreen":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]<84||myImageData.data[i+1]<84||myImageData.data[i+2]<84) {
      myImageData.data[i]=0;
      myImageData.data[i+1]=myImageData.data[i+1];
      myImageData.data[i+2]=0;
    }
    else{}
        myImageData.data[i+3]= 255;
    }
        return myImageData; 
    
    case "accentBlue":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]<84||myImageData.data[i+1]<84||myImageData.data[i+2]<84) {
      myImageData.data[i]=0;
      myImageData.data[i+1]=0;
      myImageData.data[i+2]=myImageData.data[i+2];
    }
    else{}
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
     case "highlightRed":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]>200||myImageData.data[i+1]>200||myImageData.data[i+2]>200) {
//      myImageData.data[i];
    if(myImageData.data[i]>200)
      myImageData.data[i]=255;
  //    myImageData.data[i+2];
    }
    else
    {
 //       myImageData.data[i]=0;
 //       myImageData.data[i+1]=0;
 //       myImageData.data[i+2]=0;
    }
    
        
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
    
      case "highlightGreen":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]>200||myImageData.data[i+1]>200||myImageData.data[i+2]>200) {
//      myImageData.data[i];
if (myImageData.data[i+1]>200) 
    //code
     myImageData.data[i+1]=255;
  //    myImageData.data[i+2];
    }
    else
    {
 //       myImageData.data[i]=0;
 //       myImageData.data[i+1]=0;
 //       myImageData.data[i+2]=0;
    }
    
        
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
     case "highlightBlue":    
        for (var i=0;i<myImageData.data.length;i+=4)
  {
    if (myImageData.data[i]>200||myImageData.data[i+1]>200||myImageData.data[i+2]>200) {
//      myImageData.data[i];
if(myImageData.data[i+2]>200)
      myImageData.data[i+2]=255;
  //    myImageData.data[i+2];
    }
    else
    {
 //       myImageData.data[i]=0;
 //       myImageData.data[i+1]=0;
 //       myImageData.data[i+2]=0;
    }
    
        
        myImageData.data[i+3]= 255;
    }
        return myImageData;
    
 }

};
}      