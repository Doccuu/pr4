let name1 = "Dima Boroda4";

console.log("Привет,", name1,"!");


function isEven() {
    let a = 6
    if (a % 2 == 0) {
        console.log("true");
    } else {
         console.log('false');
    }
}

isEven();

let person = {
    name: "Dima Boroda4",
    age: "26",
    city: "Москва",
}

console.log("Меня зовут", person.name , "мне", person.age, "я живу в", person.city);


let arr = [
    1, 2, 3, 4, 5
];

const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  
  console.log(sum);


let r1, r2;

let a1 = 1;
let b = 2;
let c = 3;

let D = b * b - 4 * a1 * c;

console.log(D);