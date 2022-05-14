// 1.Convert it into one-liner
// const printName = (name) => {
//     return “Hi” + name;
// }
const printName = ((name) =>   'Hi ' + name);
console.log(printName("vannsh"));


//2. Rewrite the following code using template literals
// const printBill = (name, bill) => {
//                      return "Hi" + name + ", please pay: " + bill;
//            }
//            console.log("vannsh",1000)


const printBill = (name, bill) => {
    return `Hi + ${name} +  please pay:  + ${bill}`;
}
console.log("vannsh",1000)

// 3. Modify the following code such that the object properties are destructured and logged.
// const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);


 
const person = {
                      name: "Noam Chomsky",
                      age: 92
            }
           
          const{name,age}=person;
           console.log(name);
           console.log(age);