var widths = window.innerWidth;
var heights = window.innerHeight;
var body = document.querySelector('body');

body.addEventListener('load' , function(){
    console.log("READY")
    if(widths <= 801){
        // header
        document.querySelector(".desktop").style.display = "none";
       
        document.querySelector(".bi").addEventListener('click', function () {
            var linkes = document.querySelector(".linkes");
            var close = document.querySelector(".close");
            var icon = document.querySelector(".bi");
            linkes.style.display = "grid";
            close.style.display = "block";
            icon.style.display = "none";
        }, false)

        document.querySelector(".close").addEventListener('click', function () {
            var linkes = document.querySelector(".linkes");
            var close = document.querySelector(".close");
            var icon = document.querySelector(".bi");
            linkes.style.display = "none";
            close.style.display = "none";
            icon.style.display = "";
        }, false)
        // seaction-one
        document.querySelector(".section-one-mobile").style.display = "grid";
        document.querySelector(".section-one-desktop").style.display = "none";
        // seaction-two 
        document.querySelector(".section-two-mobile").style.display = "grid";
        document.querySelector(".section-two-desktop").style.display = "none";
        // section-three
        document.querySelector(".section-three-mobile").style.display = "grid";
        document.querySelector(".section-three-desktop").style.display = "none";
    }
   if(widths >= 800){
    //    header
       document.querySelector(".mobile").style.display ="none";
        document.querySelector('.desktop').style.display = "block";

        // seaction-one
       document.querySelector(".section-one-mobile").style.display = "none";
       document.querySelector(".section-one-desktop").style.display = 'block';

        // seaction-two
       document.querySelector(".section-two-mobile").style.display = "none";
       document.querySelector(".section-two-desktop").style.display = "grid";

    //    section-three
    document.querySelector(".section-three-mobile").style.display = "none";
    document.querySelector(".section-three-desktop").style.display = "grid";
   }
},true)


document.querySelector('.section-two-mobile-b').addEventListener('click' , function(){
    document.querySelector("#del1").style.display = "block";
    document.querySelector("#del2").style.display = "block";
    document.querySelector("#del3").style.display = "block";
    document.querySelector("#del4").style.display = "block";
} , false);