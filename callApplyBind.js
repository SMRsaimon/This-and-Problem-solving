
const salmanKhan={

    name:"salman Khan",
    age:"35",
    salary:10000,
    cost :6000,

    deposite:function (vat) {
         console.log(` His Name is ${this.name}. His deposite money ${this.salary-vat-this.cost}`)
    }   
}
const amirKahn ={

    name:"Amir Kahn",
    age:"45",
    salary:12000,
    cost :8000
}

salmanKhan.deposite(12)
// const amirKhanDeposite=salmanKhan.deposite.bind(amirKahn, 40)
salmanKhan.deposite.call(amirKahn, 40)
salmanKhan.deposite.apply(amirKahn, [40])
// console.log(amirKhanDeposite())