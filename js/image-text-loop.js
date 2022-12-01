// Image Looping

var i = 0 ;
var image = [];
var time = 3000;

image[0] = "image/V5.1/1.png";
image[1] = "image/V5.1/2.png";
image[2] = "image/V5.1/3.png";
image[3] = "image/V5.1/4.png";
image[4] = "image/V5.1/5.png";
image[5] = "image/V5.1/6.png";
image[6] = "image/V5.1/7.png";
image[7] = "image/V5.1/8.png";
image[8] = "image/V4/1.jpg";
image[9] = "image/V4/2.jpg";
image[10] = "image/V4/4.jpg";
image[11] = "image/V3/6.png";
image[12] = "image/V3/1.png";
image[13] = "image/V3/9.png";
image[14] = "image/V2/1.png";
image[15] = "image/V2/10.png";
image[16] = "image/V2/9.png";
image[17] = "image/V2/4.png";

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
    strings:["1 PC - 25000MMK (LifeTime)","1 PC - 25000MMK (Unlimited)","UML MOBILE SERVICE TOOL ","UML MOBILE SERVICE MYANMAR" ],
     typeSpeed : 100 ,
     backSpeed : 50 ,
     loop : true,
 });
