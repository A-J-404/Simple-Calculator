let screen= document.getElementById('screen');
let button = document.getElementsByClassName('buttons');
let display='';
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button', buttonText);
        if(buttonText=='X'){
            buttonText ='*';
            display += buttonText;
            screen.value= display;
        }
        else if(buttonText=='/'){
            buttonText ='/';
            display += buttonText;
            screen.value= display;
        }
        else if(buttonText == 'AC'){
            display= '';
            screen.value= display;
        }
        else if(buttonText == '='){
           screen.value = eval(display); 
        }
        else{
            display += buttonText;
            screen.value= display;
        }
    })
}
