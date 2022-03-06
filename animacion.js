'use strict'

window.addEventListener("load",function(){
    let sub = this.document.querySelector("#subneting1");
    let text = this.document.querySelector("#subneting-text");
    let flecha1 = this.document.querySelector("#flecha");
    let flecha2 = this.document.querySelector("#flecha1");
    let banner = this.document.querySelector("#banner");

    flecha1.style.display ="block";
    flecha2.style.display ="none";

    sub.addEventListener("click",function(){
        console.log(flecha1.style);
        if(flecha1.style.display == "block"){
            text.style.transform = "translateY(300px)";
            flecha1.style.display = "none";
            flecha2.style.display = "block";
            banner.style.display = "none";
        }else{
            text.style.transform = "translateY(-300px)";
            flecha1.style.display = "block";
            flecha2.style.display = "none";
            banner.style.display = "block";

        }
    })

    //botones
    let calcular = this.document.querySelector("#calcular");
    let bitP = this.document.querySelector("#bit");
    let a1 = this.document.querySelector("#a1");
    let oand = this.document.querySelector("#oand");

    let secciones = this.document.querySelectorAll("article");
    let body = this.document.querySelector("body");
    let array = [];

    for(let i = 0; i<secciones.length; i++){
        array[i] = secciones[i].scrollHeight;
    }   

    calcular.addEventListener("click", function(){
        mover(body.scrollHeight);
    });
    bitP.addEventListener("click",function(){
        mover(array[0] - 60);
    });
    a1.addEventListener("click",function(){
        mover(array[0]+array[1] - 60);
    });
    oand.addEventListener("click",function(){
        mover(array[0]+array[1]+array[2] - 60);
    });
    
    let botones = this.document.querySelectorAll(".botones");
    for(let i = 0; i<botones.length; i++){
        botones[i].addEventListener("click", function(){
            mover(body.scrollHeight);
        })
    }

    function mover(num){
        window.scrollTo({
            top: num
        })
    }
})