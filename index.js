let  total = 0 ;

//number  click  handler 
let operator ;
let  num1 = ""  ;

let  isNewNumber = true ;
let  inp  =  document.querySelector('.inp') ;
document.querySelectorAll('.num').forEach(button => button.addEventListener('click',(e)=>{
        
        if(!isNewNumber){
                num1 += e.target.textContent ;
                inp.value += e.target.textContent ;
        }
        else {
                num1 =  e.target.textContent ;
                inp.value = e.target.textContent ;
        } 
        isNewNumber = false ;
        // inp.value += e.target.textContent ;
        console.log(num1) ;
}))

// operator  click  handler 

document.querySelectorAll('.operator').forEach(button => button.addEventListener('click' , (e)=>{
        
        isNewNumber = true ;
        console.log('operator :' , e.target.textContent) ;
        inp.value = e.target.textContent  ;
        if(operator != null){
               op_handler(operator);
               
        }
        else{
                total = Number(num1) ;
        }

        // else{
        //         prev_op = curr_op ;
        //         curr_op = e.target.textContent ;
        // }
        operator =  e.target.textContent ;
        num1 = ""
        
        
}))


function op_handler(operator){
        switch (operator) {
                case "+":
                  total += Number(num1) ;
                  num1 = "" ; 
                        break;
                
                case "-":
                  total -= Number(num1) ;
                  num1 = "" ;
                    
                        break;

                case "*":
                  
                  total *= Number(num1) ;
                  num1 = "" ;
                     
                        break;

                case "/":
                   total /= Number(num1) ;
                  num1 = "" ;    
                        break;
                
                case "C":
                    num1 = "" ;   
                        break;

                case "=":
                        inp.value = total ;
                        console.log(total) ;
                        break;

        }
        
}

