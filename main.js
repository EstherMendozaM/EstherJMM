function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}



//función que valida el ingreso de solo letras
function sololetras(evt){
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code==8) { //barra espaciadora
        return true;
    }else if(code>=65 && code<=90 || code>=97 && code<=122) { // son letras de a-z, A-Z
        return true;
    } else{ //otra tecla
        return false;
    }
}

//función que valida el ingreso de solo números
function solonumeros(evt,control,cantidad){
    xlongitud=document.getElementById(control).value.length; 
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    //const x=5;
    //(x=1) ? alert("corecto"):alert("Incorecto");
    if((code>=48 && code<=57) && xlongitud<cantidad) { // es un número
        return true;
    } else{ // otra tecla
        return false;
	}
}  

function validanombre(){
    if(document.getElementById("nombre").value==0){
        alert("Por favor, falta ingresar el nombre");
    }
}
function validacorreo(){
    if(document.getElementById("correo").value==0){
        alert("Por favor, falta ingresar el correo");
    }
}
function validacelu(){
    if(document.getElementById("celu").value==0){
        alert("Por favor, falta ingresar el teléfono");
    }
}
function valida(){
    validanombre();
    validacorreo();
    validacelu();
}