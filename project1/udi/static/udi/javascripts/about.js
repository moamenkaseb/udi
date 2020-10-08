widths = window.innerWidth;
document.querySelector("body").addEventListener('load' , function(){
    if (widths <= 800){
        document.querySelector(".col-8").className = "col";
    }
},true);