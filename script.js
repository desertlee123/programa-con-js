let randomNum1 = Math.round(Math.random()*50);
let randomNum2 = Math.round(Math.random()*10);
let correctResult = randomNum1*randomNum2;

let userResult = parseInt(prompt(`Responde correctamente, ¿Cuánto es ${randomNum1} x ${randomNum2}?`));

while(userResult!=correctResult){    
    userResult = parseInt(prompt(`Vuelve a intentarlo, ¿Cuánto es ${randomNum1} x ${randomNum2}?`));
}

alert('Bien hecho, has respondido exitosamente. Reinicia la página para volver a jugar');