var myName;
// undefined
const myAge = 0;
const myFatherName = "";
const myMotherName = null;
const myJob=false

if (!myName) {
  console.log(" myName is falsy value");
  if (!myAge) {
    console.log(" myAge is falsy value");
    if (!myFatherName) {
      console.log(" myFatherName is falsy value");
      if (!myMotherName) {
        console.log(" myMotherName is falsy value");
        if(!myJob){
            console.log("myJob is a falsy Value")
        }
      } else {
        console.log("myMotherNmae is true value ");
      }
    } else {
      console.log("myFatherName is true value ");
    }
  } else {
    console.log("myAge is true value ");
  }
} else {
  console.log("myName is true value ");
}

var myName;
// undefined
const myAge = 0;
const myFatherName = "";
const myMotherName = null;
const myJob = false
const income=NaN
const  player={}
const foods=[]
  if(!myName && !myAge && !myFatherName && !myMotherName && !myJob && !income){

      console.log(`${myName}, ${myAge}, ${myFatherName}, ${myMotherName}, 
                   ${myJob}, ${income} is falsy value`)

  }else{

    console.log("true")
  }
  if(player && foods){
      console.log(`${player}, ${foods} this is Truthy value`)
  }else{

    console.log("false")
  }