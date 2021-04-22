let numbers = []
for(let i= 0; i < 75; i++){
    numbers.push(i)
}
        let display = [];

       let getRandomNum = function () {

         let rando =    function () {

                for (let i = 0; i < numbers.length; i++) {
                    const j = Math.floor(Math.random() * numbers.length + 1);
                    const number = numbers[j];

                    if (number) {
                        numbers.splice(j, 1);
                    }
                    if (numbers.length < 0) {
                        return
                    } else {

                        return number;
                    }
                }
            }

            let index;
            if (numbers.length === 0) {
                index = "No more numbers"
            } else {
                index = rando();
                display.push(index);
            }
           return index
        }

console.log( getRandomNum())