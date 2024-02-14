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


console.log( `${name} es un perrito maravilloso de raza ${breed} y tiene ${edad} añitos de edad` )

console.log(`${name} tiene un rating de 11/10`)




// destructuracion en arrays

// 1. usamos [] en vez de {}
// 2. los nombres los creamos al destructurar

const misTresLibrosFavoritos = ["Mundodisco", "Dragonlance", "Dresden Files", "Harry Potter"]



const [ libro1, libro2, libro3 ] = misTresLibrosFavoritos
console.log(libro1, libro2, libro3)

console.log(`mis libros favoritos son ${libro1}, ${libro2} y ${libro3}`)