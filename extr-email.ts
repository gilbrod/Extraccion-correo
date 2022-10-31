//Primera Indicacion de Jonathan//

let text: any;
text="www.google.com.ve, 12345 qwerty zero67@gmail.com, <gokuo@yahoo.com >";
//text = prompt("Coloca los Datos");
let re = (/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
text.match(re).forEach(function(email){
    console.log(email)
});