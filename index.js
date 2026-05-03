let  total = 0 ; 
let operator = null ;
let  num1 = ""  ;
let  isNewNumber = true ;


let  inp  =  document.querySelector('.inp') ;
document.querySelectorAll('.num').forEach(button => button.addEventListener('click',(e)=>{
        
        if(!isNewNumber){
                num1 += e.target.textContent ;
                inp.value += e.target.textContent ;
                isNewNumber = false ;
        }
        else {
                num1 =  e.target.textContent ;
                inp.value = e.target.textContent ;
        } 
        
        // inp.value += e.target.textContent ;
        console.log(num1) ;
}))

// operator  click  handler 

document.querySelectorAll('.operator').forEach(button => button.addEventListener('click' , (e)=>{
        
        isNewNumber = true ;

        let  newOperator = e.target.textContent  ;

        console.log('operator :' , newOperator) ;
        // - >   operator = e.target.textContent  ;
        // this  happens  before the  previous  one is  calculated  
        
        
        if(newOperator ==="="){
                if(operator !== null){
                        op_handler(operator) ;
                        // break  only works  in the  loops  and  the  switch  statements  
                        //other wise  the  logic  will  break  here . 
                 }
                 inp.value = total ;
                        operator = null ;
                        num1 = "" ;
                        console.log(total) ;
                        return  ;
               
        //        else op_handler(operator);
               
        }
        if(operator !== null){
                op_handler(operator) ;
        }
        else{
                total = Number(num1) ;
               }
        
        operator = newOperator ;
        num1 = "" ;

        // else{
        //         prev_op = curr_op ;
        //         curr_op = e.target.textContent ;
        // }
       
 
        
}))


function op_handler(operator){
        if(num1 === "") return  ;
        let   current = Number(num1) ;
        switch (operator) {
                case "+":
                  total += current  ;
                  num1 = "" ; 
                        break;
                
                case "-":
                  total -= current  ;
                  num1 = "" ;
                    
                        break;

                case "*":
                  
                  total *= current  ;
                  num1 = "" ;
                     
                        break;

                case "/":
                        if(current  === 0){
                                alert("Cannot  divide  by 0  ");
                                return ;
                        }
                   total /= Number(num1) ;
                   num1 = "" ;    
                        break;

        }
        num1 = "" ;
        
}

