widths = window.innerWidth;
heights = window.innerHeight;
document.querySelector('body').addEventListener('load' , function(){

    console.log("DOM IS READY");

    console.log("DOM IS READY");
    if( widths <= 800){
        // header
        document.querySelector(".mobile").style.display = 'grid';
        document.querySelector(".desktop").style.display = "none";
   
    }
    if(widths >= 800){
           document.querySelector(".mobile").style.display = 'none';
           document.querySelector(".desktop").style.display = "grid";
    }
},true);

// dropdowne funtions

// open function

document.querySelector(".bi").addEventListener('click' , function(){
    document.querySelector(".bi").style.display = "none";
    document.querySelector(".close").style.display = "block";
    document.querySelector(".linkes").style.display = "grid";
    document.querySelector("#contact-us").style.display = 'none';
} , false);

// close function
document.querySelector(".close").addEventListener('click' , function(){
    document.querySelector(".bi").style.display = "initial";
    document.querySelector(".close").style.display = "none";
    document.querySelector(".linkes").style.display = "none";
} , false)