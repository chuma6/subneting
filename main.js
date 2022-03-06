'use strict'

window.addEventListener("load", function(){

    //VALIDAR LOS NUMEROS BINARIOS
    var num1 = this.document.querySelector("#numero1");
    var num2 = this.document.querySelector("#numero2");

    binario(num1, 'keyup');
    binario(num1, 'keydown');
    binario(num2, 'keyup');
    binario(num2, 'keydown');

    function binario(name,funcion){
        name.addEventListener(funcion, function(){
            let ultimo = parseInt(name.value.charAt(name.value.length-1));
            if(ultimo != 0 && ultimo != 1){
               name.value.toString();
               name.value = name.value.slice(0,-1)
            }
        })
    }
    //CALCULAR EL BIT DE PARIEDAD
    let pariedad = this.document.querySelector("#bit-paridad");
    let escribe = this.document.querySelector("#escribe-paridad")
    let hora = this.document.querySelectorAll(".hora");
    let myDate = new Date(); 

    pariedad.addEventListener("click",function(){
        let cont = contador(num1);

        hora[0].innerHTML = myDate.getHours() + ":"+ myDate.getMinutes();
        if(cont == 0){
            escribe.innerHTML="Primero escribe en el campo numero 1, un numero binario...";         
        }else if(cont % 2 == 0){
            escribe.innerHTML="El bit de pariedad de "+num1.value+" es <strong>0</strong>";
        }else{
            escribe.innerHTML="El bit de pariedad de "+num1.value+" es <strong>1</strong>";       
        }
    })

    function contador(num){
        let numero = num.value;
        let contador = 0;
        for(let i = 0; i<numero.length; i++){
            if(numero.charAt(i) == 1){
                contador++;
            }
        }
        return contador;
    }

    //CALCULAR EL COMPLEMENTO A 1
    let complemento = this.document.querySelector('#complemento1');
    let escribeC1 = this.document.querySelector("#escribe-complemento");

    complemento.addEventListener('click', function () {
        let array = [];
        let complementoA1 = "";
        hora[1].innerHTML = myDate.getHours() + ":"+ myDate.getMinutes();
        for(let i = 0; i< num2.value.length; i++){
            array[i] = num2.value.charAt(i);
            if(array[i] == 0){
                complementoA1 = complementoA1 + "1";
            }else{
                complementoA1 = complementoA1 + "0";
            }
        }
        hora.innerHTML = myDate.getHours() + ":"+ myDate.getMinutes();
        if(complementoA1.length <= 0){
            escribeC1.innerHTML="Primero escribe en el campo numero 2, un numero binario...";
        }else{
            escribeC1.innerHTML="El complemento a 1 del numero "+num2.value+" es el <strong>"+complementoA1+"</strong>";
        }
    });

    //LAS TOASTS
    var toastTrigger = document.getElementById('bit-paridad');
    var toastLiveExample = document.getElementById('liveToast');

    var toastTrigger1 = document.getElementById('complemento1');
    var toastLiveExample1 = document.getElementById('liveToast1');

    var toastLiveExample2 = this.document.querySelector("#liveToastFinal");

    toast(toastTrigger,toastLiveExample, toastLiveExample1, toastLiveExample2);
    toast(toastTrigger1, toastLiveExample1, toastLiveExample, toastLiveExample2);

    function toast(boton, cuadro, ocultar, ocultar2){
        if (boton) {
            boton.addEventListener('click', function () {
                var toast = new bootstrap.Toast(cuadro);
                cuadro.style.display ="block";
                ocultar.style.display="none";
                ocultar2.style.display="none";
                toast.show()
            })
        }
    }

    //RESULTADO AND
    let and = this.document.querySelector("#and");
    let escribeAnd = this.document.querySelector("#escribe-and");

    and.addEventListener("click", function(){
        var toast = new bootstrap.Toast(toastLiveExample2);
        let suma = "";
        let contador = 0;
        toastLiveExample.style.display = "none";
        toastLiveExample1.style.display = "none";
        toastLiveExample2.style.display = "block";
        hora[2].innerHTML = myDate.getHours() + ":"+ myDate.getMinutes();

        if(num1.value.length <= 0){
            if(num2.value.length <= 0){
                escribeAnd.innerHTML= "Los dos campos estan vacios, escribe dos numeros binarios para hacer la operacion AND";
                error(num1);
                error(num2);
            }else{
                escribeAnd.innerHTML= "Primero escribe en el campo numero 1, un numero binario...";
                error(num1);
                perfect(num2);
            }
        }else if(num2.value.length <= 0){
            if(num1.value.length <= 0){
                escribeAnd.innerHTML= "Los dos campos estan vacios, escribe dos numeros binarios para hacer la operacion AND";
                error(num1);
                error(num2);
            }else{
                escribeAnd.innerHTML= "Primero escribe en el campo numero 2, un numero binario...";
                perfect(num1);
                error(num2);
            }
        }else{
            perfect(num1);
            perfect(num2);
            if(num1.value.length > num2.value.length){
                ceros(num1,num2);
            }else if(num2.value.length > num1.value.length){
                ceros(num2, num1);
            }

            for(let i = 0; i < num1.value.length; i++){
                suma = suma + (num1.value.charAt(i) & num2.value.charAt(i));
            }

            escribeAnd.innerHTML = "La operacion AND de los dos numeros es de <strong>"+suma+"</strong>";
        }

        toast.show()
    });

    function error(num){
        num.style.boxShadow ="0px 0px 5px #F0A9B0";
        num.style.border ="2px solid #DC3545";
    }
    function perfect(num){
        num.style.boxShadow ="0px 0px 5px #9DCCB6";
        num.style.border ="2px solid #157347";
    }
    function ceros (num1, num2){
        let cuantosCeros = "";
        let ceros = "";

        cuantosCeros = num1.value.length - num2.value.length;
        for(let i = 0; i<cuantosCeros; i++){
            ceros = ceros + "0";
        }
        num2.value = ceros + num2.value;
    }

    //Animacions logo

    let logo = this.document.querySelector("#logo");

    logo.addEventListener("mouseover",function(){
        logo.src = "img/conexion2.png";
    });

    logo.addEventListener("mouseout",function(){
        logo.src = "img/conexion.png";
    })
});