$(document).ready(function () {
    //Posibility to load an array of images and then cycle :) enjoy .
    //By Stefan:)
    var images=['images/banner-full.jpg','images/images-169.jpg','images/hd.jpg'];
    var currentElement=0;
    var image =$('.image');
    //Left arrow
    $(".left").click(function () {
        if(currentElement==0){
            currentElement=images.length-1;
        }
        else {
            currentElement--;
        }
        $('.image').css("background-image", "url("+images[currentElement]+")");
    });

    //Right arrow
    $('.right').click(function () {
        //logical check
        if(currentElement==images.length-1){
            currentElement=0;
        }
        else {
            currentElement++;
        }
        $('.image').css("background-image", "url("+images[currentElement]+")");
    });
});


