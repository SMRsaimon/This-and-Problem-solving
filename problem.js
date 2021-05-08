// Find the largest element of an array

const number =[12,3,5,6,99,5 ]
function findLargestNumber(number) {
    var largestNumber=0;
    
for (let i = 0; i < number.length; i++) {
    const element = number[i];
      if(largestNumber<element){
          largestNumber=element
      }  
}
return largestNumber;
   
}
console.log(findLargestNumber(number))  
console.log(Math.max(...number))
console.log(Math.min(...number))

// Remove duplicate item from an array

const findDuplicateNumber=(array)=>{
  
     let newNumber=[]
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         if (newNumber.indexOf(element)=== -1) {
             console.log(element)

            newNumber.push(element)            
         }        
     }
     return newNumber
}

const number2=[1,1,1,1,1,1,1,2,2,2,2,2,2,2]
console.log(findDuplicateNumber(number2))

//  Count the number of words in a string


const sentence="I    love    bangladesh. jnjnjkl  hjdkn"
const wordsCounter=(spech)=>{



    let count=0
   for (let i = 0; i < spech.length; i++) {
       const element = spech[i];
   if (element==" " && spech[i-1] !== " ") {
       count++ 
       
   }      
   }
   count++
   return  count
  
}

console.log(wordsCounter(sentence))

