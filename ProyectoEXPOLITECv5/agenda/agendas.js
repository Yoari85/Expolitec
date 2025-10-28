function agendar(){
//Declaramos las variables de los días que cambiarán

//Declaramos la variable de las opciones
    var selector = (document.getElementById("selecciona").value);

//Declaramos variable de error (default)
    var mal = (document.getElementById("error"));
//Definimos los casos posibles y sus resultados sobre las variables de los días (en este caso cambia el fondo del día)
    switch (selector) {
        case "dia1":
            (document.getElementById("d1"));
            d1.style.color = "#eeff00ff";
            
            break;

        case "dia2":
            (document.getElementById("d2"));
            d2.style.color = "#eeff00ff";
            break;
            
        case "dia3":
            (document.getElementById("d3"));
            d3.style.color = "#eeff00ff";
            break;
            
        case "dia4":
            (document.getElementById("d4"));
            d4.style.color = "#eeff00ff";
            break;

        case "dia5":
            (document.getElementById("d5"));
            d5.style.color = "#eeff00ff";
            break;
            
        case "dia6":
            (document.getElementById("d6"));
            d6.style.color = "#eeff00ff";
            break;
            
        case "dia7":
            (document.getElementById("d7"));
            d7.style.color = "#eeff00ff";
            break;

        case "dia8":
            (document.getElementById("d8"));
            d8.style.color = "#eeff00ff";
            break;
            
        case "dia9":
            (document.getElementById("d9"));
            d9.style.color = "#eeff00ff";
            break;
            
        case "dia10":
            (document.getElementById("d10"));
            d10.style.color = "#eeff00ff";
            break;

        case "dia11":
            (document.getElementById("d11"));
            d11.style.color = "#eeff00ff";
            break;

        case "dia12":
            (document.getElementById("d12"));
            d12.style.color = "#eeff00ff";
            break;
            
        case "dia13":
            (document.getElementById("d13"));
            d13.style.color = "#eeff00ff";
            break;
            
        case "dia14":
            (document.getElementById("d14"));
            d14.style.color = "#eeff00ff";
            break;

        case "dia15":
            (document.getElementById("d15"));
            d15.style.color = "#eeff00ff";
            break;
            
        case "dia16":
            (document.getElementById("d16"));
            d16.style.color = "#eeff00ff";
            break;
            
        case "dia17":
            (document.getElementById("d17"));
            d17.style.color = "#eeff00ff";
            break;

        case "dia18":
            (document.getElementById("d18"));
            d18.style.color = "#eeff00ff";
            break;
            
        case "dia19":
            (document.getElementById("d19"));
            d19.style.color = "#eeff00ff";
            break;
            
        case "dia20":
            (document.getElementById("d20"));
            d20.style.color = "#eeff00ff";
            break;

        case "dia21":
            (document.getElementById("d21"));
            d21.style.color = "#eeff00ff";
            break;

        case "dia22":
            (document.getElementById("d22"));
            d22.style.color = "#eeff00ff";
            break;
            
        case "dia23":
            (document.getElementById("d23"));
            d23.style.color = "#eeff00ff";
            break;
            
        case "dia24":
            (document.getElementById("d24"));
            d24.style.color = "#eeff00ff";
            break;

        case "dia25":
            (document.getElementById("d25"));
            d25.style.color = "#eeff00ff";
            break;
            
        case "dia26":
            (document.getElementById("d26"));
            d26.style.color = "#eeff00ff";
            break;
            
        case "dia27":
            (document.getElementById("d27"));
            d27.style.color = "#eeff00ff";
            break;

        case "dia28":
            (document.getElementById("d28"));
            d28.style.color = "#eeff00ff";
            break;
            
        case "dia29":
            (document.getElementById("d29"));
            d29.style.color = "#eeff00ff";
            break;
            
        case "dia30":
            (document.getElementById("d30"));
            d30.style.color = "#eeff00ff";
            break;

//Mensaje al no seleccionar ninguna opción
        default:
            mal.innerHTML = "Tiene que seleccionar un día";
            break;
    }    
    
}