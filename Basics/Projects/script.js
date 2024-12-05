const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
 buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'lightcoral'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'peachpuff'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'LemonChiffon'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'Lavender'){
            body.style.backgroundColor = event.target.id;
        }
        else if(event.target.id === 'PowderBlue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'BabyBlue'){
            body.style.backgroundColor = event.target.id;
        }
    })

 });