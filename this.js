// implicit binding
const monthlyErning=function(obj){
    obj.deposite=function(){

         console.log(this)
    }
}
const salmanKhan={

    name:"salman Khan",
    age:"35",
    salary:1000,
    cost :6000,
   
}
const amirKahn ={

    name:"amir Kahn",
    age:"45",
    salary:1200,
    cost :8000
}
monthlyErning(salmanKhan)
monthlyErning(amirKahn)
salmanKhan.deposite()
amirKahn.deposite()

// js class method and this 
class Person{
    constructor(name, salary, cost){

        this.name=name,
        this.salary=salary,
        this.cost=cost
    }

    deposite() {
    
        console.log(`my Name is ${this.name}, My monthly deposite balance is ${this.salary-this.cost}`)
        
    }
}

const person1=new Person("Ura Dura Khan ", 3000, 1000)
const person2=new Person("Patla Khan ", 4000, 1000)
person1.deposite()
person2.deposite()
