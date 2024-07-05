//Array that includes magician's names
let magicians_names = ["hamza", "ali", "zohaib"];

//function 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}
show_magicians(magicians_names)