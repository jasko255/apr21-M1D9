let bingo = document.getElementById("bingo");
    
    
    
    
            for (let i = 0; i < 75; i++) {
    
               
              let cell = document.createElement("div");    
           
        
              cell.classList.add("number");    
             
              let number = document.createElement("h3");    
             
              number.innerText = i + 1;    
             
                  cell.appendChild(number);    
                  bingo.appendChild(cell);
            }





            

const onClick = function(){
    let myNumber = document.querySelectorAll('h3')


    // let alreadyPicked = [];
        
    //    let unique = false;
    
    //   while (!unique && alreadyPicked.length < 75) {
    //     let randNumber = Math.floor(Math.random() * 76);
    
    //     if (alreadyPicked.includes(randNumber) == false) {
    //       unique = true;
    //       alreadyPicked.push(randNumber);
    //     }
    
      
    // }



               



    let myRan = Math.floor(Math.random() * 76)
     myNumber[myRan - 1].style.backgroundColor = 'red'
     console.log(myRan);
//   let styleIt =  myNumber[myRan - 1]

    
    // for(let i = 0; i < myNumber.length; i++){
        
    // }


}
         