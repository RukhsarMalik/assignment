let myName: string = "rukhsar malik"
 // Assign name in a new variabl
console.log(myName.toUpperCase())
// toUpperCase() will convert all letters in uppercase
console.log(myName.toLowerCase())
let words: string[] = myName.split(" ")
let titleCases = ""
for (let i = 0 ; i < words.length; i++ ){
    titleCases += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
    
}
console.log(titleCases)



let naame: string = "Eric"

console.log(`Hello ${naame}, would you like to learn some python today?`)

// it will print the statement




