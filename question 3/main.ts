let person_Name: string = "rukhsar malik"
console.log(person_Name.toUpperCase())
console.log(person_Name.toLowerCase())
let word: string[] = person_Name.split(" ")
let titleCase = ""
for (let i = 0 ; i < word.length; i++ ){
    titleCase += word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase() + " "
    
}

console.log(titleCase)
