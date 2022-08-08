// Image Looping

var i = 0 ;
var image = [];
var time = 3000;

image[0] = "image/V4/1.jpg";
image[1] = "image/V4/2.jpg";
image[2] = "image/V4/4.jpg";
image[3] = "image/V3/6.png";
image[4] = "image/V3/1.png";
image[5] = "image/V3/9.png";
image[6] = "image/V2/1.png";
image[7] = "image/V2/10.png";
image[8] = "image/V2/9.png";
image[9] = "image/V2/4.png";
image[10] = "image/V1/5.png";
image[11] = "image/V1/1.png";
image[12] = "image/V1/2.png";

function ImageChange () {
    document.slide.src = image[i];
    if (i < image.length -1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("ImageChange()",time)
}
window.onload = ImageChange;

//looping text 

const typed = new Typed (".supported",{
    strings:["1 PC - 20000MMK (LifeTime)","1 PC - 20000MMK (Unlimited)","UML MOBILE SERVICE TOOL ","UML MOBILE SERVICE MYANMAR" ],
     typeSpeed : 100 ,
     backSpeed : 50 ,
     loop : true,
 });