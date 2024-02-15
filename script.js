console.log("probando")



// Sintaxis reducida

// const saludar = (firstName) => {
//   return `Hola ${firstName}`
// }

// si la funcion tiene una sola linea, podemos reducir su sintaxis
//1. se remueven las llaves alrededor
//2. el return queda implicito (no es necesario)
//3. (opcional). Si la funcion tiene UN solo parametro, entonces los parentesis del parametro son opcionales

const saludar = (firstName) => `Hola ${firstName}`
// const saludar = firstName => `Hola ${firstName}` // 3

console.log( saludar("juliette") )
console.log( saludar("leidy") )


const oneArr = ["pablo", "adri", "josep", "meri", "fran", "abraham"]

const filteredArr = oneArr.filter((eachName) => eachName[0] === "a" ? true : false).map((eachName) => eachName.toUpperCase())


// const filteredArr = oneArr
// .filter((eachName) => eachName[0] === "a" ? true : false)
// .map((eachName) => {
//   // ...
//   return eachName.toUpperCase()
// })

console.log(filteredArr)



// Object Property Shorthand
// Abreviacion de objetos


let username = "bob";
let age = 37;
// imaginamos que esto viene de otro lugar


// const user = {
//   username: username, // "bob"
//   age: age // "37"
// }

// Si el nombre de la propiedad es el mismo que el nombre de la variable de donde la data, entonces podemos omitir uno

const user = {
  username,
  age,
  hobby: "gaming"
}


console.log(user)


// Destructuración


const unPerritoQueEncontre = {
  name: "Bethoven",
  breed: "San Bernardo",
  edad: 8,
  codigo: 1234
}

// destructuramos las propiedades del objeto y las convertimos en variables

// const {nombres de las propiedades} = el objeto del cual extraerlas

const { breed, name, edad } = unPerritoQueEncontre
// const name = "Bethoven"
// const breed = "San Bernardo"
// const edad = 8
console.log(name, breed, edad)


// console.log( `${name} es un perrito maravilloso de raza ${breed} y tiene ${edad} añitos de edad` )

// console.log(`${name} tiene un rating de 11/10`)


const otroPerrito = {
  name: "Cara de Papa",
  breed: "Pug",
  edad: 12,
  codigo: 7896
}

function describirPerrito({ name, breed, edad }) {

  // const { name, breed, edad } = perrito

  console.log( `${name} es un perrito maravilloso de raza ${breed} y tiene ${edad} añitos de edad` )

  console.log(`${name} tiene un rating de 11/10`)

}

describirPerrito(otroPerrito)
describirPerrito(unPerritoQueEncontre)





// destructuracion en arrays

// 1. usamos [] en vez de {}
// 2. los nombres los creamos al destructurar

const misTresLibrosFavoritos = ["Mundodisco", "Dragonlance", "Dresden Files", "Harry Potter"]



const [ libro1, libro2, libro3 ] = misTresLibrosFavoritos
console.log(libro1, libro2, libro3)

console.log(`mis libros favoritos son ${libro1}, ${libro2} y ${libro3}`)



// Operador Spread => ...
// Esparcir todos los elementos del array, SIN la estructura del array

const someNumbers = [ 4, 8, 15, 16, 23, 42 ];

console.log(someNumbers)
console.log([ 4, 8, 15, 16, 23, 42 ])

console.log(...someNumbers)
console.log(4, 8, 15, 16, 23, 42)



console.log( Math.max(10, 20, 4) )
console.log( Math.max(...someNumbers) )


const students1 = ["fran", "pablo", "meri"]
const students2 = ["adri", "josep", "abraham"]


const allStudents = [...students1, ...students2]
console.log(allStudents)


const someNumbers2 = [ 4, 8, 15, 16, 23, 42 ];

const clone = [...someNumbers2]

const reversedNumbers = clone.reverse()
console.log(reversedNumbers)
console.log(someNumbers2)


const people = [
  {
    username: "jorge",
    candy: 10,
  }, // ref. abcd
  {
    username: "juliette",
    candy: 20,
  }, // ref. fvcd
  {
    username: "leidy",
    candy: 15,
  } // ref. erfs
] // ref. 1234


// const cloneArr = [...people] // shallow clone (map, slice) Solo se copia la primera referencia
const cloneArr = JSON.parse(JSON.stringify(people)) // deep clone. se copian TODAS las referencias tanto la primero como anidadas
cloneArr.pop() // hago una modificacion sobre la data del primer nivel
console.log("clone", cloneArr)
console.log(people)

cloneArr[0].candy = 100; // hago una modificacion sobre un elemento (objeto) anidado
console.log("clone", cloneArr)
console.log("original", people)


// Operador Rest (...) => El resto de...

const hobbies = ["surfear", "cocinar", "gaming", "escalar", "juegos de mesa"];


const [ miPrimerHobby , miSegundoHobby, ...otrosHobbies ] = hobbies
console.log(miPrimerHobby, miSegundoHobby)

console.log(otrosHobbies)

function verificarSiPaso(...todasLasNotas) {
  console.log(todasLasNotas)
  // 0 - 10.
  // si es ocho paso
  let notaTotal = 0
  todasLasNotas.forEach((eachNota) => {
    notaTotal += eachNota
  })
  if (notaTotal >= 8) {
    console.log("El estudiante aprobó")
  } else {
    console.log("el estudiante no aprobó")
  }
}


verificarSiPaso( 2, 4 )
verificarSiPaso( 6, 2 )
verificarSiPaso( 3, 2, 3 )
verificarSiPaso( 9 )