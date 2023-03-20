
function cambioColor(){
    console.log("Entro  Color")
    document.getElementById("cuerpo").style.backgroundColor="red" 
}


function cambioClass(){
        if (document.getElementById("cuerpo").getAttribute("class")=="bkcolor1"){
            document.getElementById("cuerpo").classList.remove("bkcolor1");
            document.getElementById("cuerpo").classList.add("bkcolor2");  
        } 
        else  
        {
            document.getElementById("cuerpo").classList.remove("bkcolor2");
            document.getElementById("cuerpo").classList.add("bkcolor1");  
        }
}  

