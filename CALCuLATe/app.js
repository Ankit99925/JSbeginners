let display="";
let box=document.querySelector('.main');
let inp=box.querySelector('.input');
let btn=document.querySelectorAll('.num');


// console.log(Array.from(btn));
Array.from(btn).forEach((e)=>{
    e.addEventListener('click',(ele)=>{
        if (ele.target.innerHTML == '='){
            display=eval(display);
            inp.value=display;    
        }else if(ele.target.innerHTML == 'AC')
        {   
            display="";
            inp.value=display;
        }
        else if(ele.target.innerHTML == 'C')
        {   
            display=display.slice(0,-1);
            inp.value=display;
        }
        else if(ele.target.innerHTML == '+/-')
        {   
            if(display>0){
                display=display.replace('',"-");
                inp.value=display;
            }else if(display<0){
            display=display.replace("-","");
            inp.value=display;
            }
        }else{
        display +=ele.target.innerHTML; 
        inp.value=display;
         
        
    }

    })});
    
