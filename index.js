let  total = 0 ;

//number  click  handler 
let prev_op , curr_op ;
let  num1 , num2 ;

let  inp  =  document.querySelector('.inp') ;
document.querySelectorAll('.num').forEach(button => button.addEventListener('click',(e)=>{
        
        if(num1){
                num1 += e.target.textContent ;
                inp.value += e.target.textContent ;
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
        
       
        console.log('operator :' , e.target.textContent) ;
        inp.value = e.target.textContent  ;
        if(prev_op != null){
               op_handler(prev_op);
        }
        if(prev_op === null){
                prev_op = e.target.textContent ;
                curr_op = e.target.textContent ;
                total = num1 ;
                num1 = null ;
        }
        else{
                prev_op = curr_op ;
                curr_op = e.target.textContent ;
        }

        
        
        
}))


function op_handler(prev_op){
        switch (prev_op) {
                case "+":
                  total += Number(num1) ;
                  num1 = null ; 
                        break;
                
                case "-":
                  total -= Number(num1) ;
                  num1 = null ;
                    
                        break;

                case "*":
                  
                  total *= Number(num1) ;
                  num1 = null ;
                   mul(num1);   
                        break;

                case "/":
                   total /= Number(num1) ;
                  num1 = null ;    
                        break;
                
                case "C":
                    num1 = null ;   
                        break;

                case "=":
                        console.log(total) ;
                        break;

        }
        
}

// function add(num1) {
//         if(prev_op != null){
//                 total
//         }
//         if(total == 0 && prev_operator == null) total =  num1 ;
//         else total += num1 ;
//         inp.value =  total ;
// }

// function sub(num1) {
//         if(total == 0 ) total =  num1 ;
//         else total -= num1 ;
// }

// function mul(num1) {
//         if(total == 0 ) total =  num1 ;
//         else total *= num1 ;

// }

// function div(num1) {
//         if(total == 0 ) total =  num1 ;
//         else total /= num1 ;
// }

