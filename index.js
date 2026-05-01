let  total = 0 ;

//number  click  handler 
let prev_op , curr_op ;
let  num1 , num2 ;

let  inp  =  document.querySelector('.inp') ;
document.querySelectorAll('.num').forEach(button => button.addEventListener('click',(e)=>{
        
        console.log(e.target.textContent) ;
        if(num1){
                num1 += e.target.textContent ;
                inp.value += e.target.textContent ;
        }
        else {
                num1 =  e.target.textContent ;
                inp.value = e.target.textContent ;
        } 

        // inp.value += e.target.textContent ;
        console.log(num1 , inp.value) ;
}))

// operator  click  handler 

document.querySelectorAll('.operator').forEach(button => button.addEventListener('click' , (e)=>{
        inp.value = "";

        console.log('operator :' ,e.target.textContent) ;
        inp.value = e.target.textContent  ;
        
        prev_op = curr_op ;
        curr_op = e.target.textContent ;

        switch (curr_op) {
                case "+":
                  
                  curr_op = '+' ;
                  add(num1);  
                        break;
                
                case "-":
                   sub(num1);  
                        break;

                case "*":
                   mul(num1);   
                        break;

                case "/":
                   div(num1);    
                        break;
                
                case "C":
                    clear(num1);   
                        break;

                case "=":
                        
                        break;

                default:
                        break;
        }
}))


function op_handler(total ,  num1 , op){

        
}

function add(num1) {
        if(total == 0 && prev_operator == null) total =  num1 ;
        else total += num1 ;
        inp.value =  total ;
}

function sub(num1) {
        if(total == 0 ) total =  num1 ;
        else total -= num1 ;
}

function mul(num1) {
        if(total == 0 ) total =  num1 ;
        else total *= num1 ;

}

function div(num1) {
        if(total == 0 ) total =  num1 ;
        else total /= num1 ;
}

